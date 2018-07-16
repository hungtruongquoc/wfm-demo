import { Component } from "@angular/core";
import * as XLSX from "xlsx";
import { ERROR_COLLECTOR_TOKEN } from "../../../../node_modules/@angular/platform-browser-dynamic/src/compiler_factory";

@Component({
  selector: "app-adhere-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent {
  isLoading = true;
  private ajaxRequest = new XMLHttpRequest();
  rows = { agents: [], schedules: [] };

  constructor() {
    const fileUrl = "/assets/AdherenceActionReport.xlsx";

    /* set up async GET request */
    this.ajaxRequest.open("GET", fileUrl, true);
    this.ajaxRequest.responseType = "arraybuffer";
    this.ajaxRequest.onload = e => {
      const data = new Uint8Array(this.ajaxRequest.response);
      const wb = XLSX.read(data, { type: "array", raw: true });
      const sheetName = wb.SheetNames[0];
      const rawData = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {
        raw: false,
        header: 1,
        blankrows: false
      });
      console.dir(rawData);
      this.mapDataToProperArray(rawData);
      this.produceAgentStats();
    };
    this.ajaxRequest.send();
  }

  private mapDataToProperArray(rawArray) {
    if (rawArray && rawArray !== null && rawArray.length > 0) {
      rawArray.reduce((collector, item, index) => {
        if (item.length === 2) {
          switch (item[0].toLowerCase()) {
            case "agent id":
              collector.agents.push({ id: item[1] });
              break;
            case "agent name":
              collector.agents[collector.agents.length - 1].name = item[1];
          }
        }
        if (item && item !== null && item.length === 8) {
          if (
            item.every(element => element && element !== null && element !== "")
          ) {
            if (item[0] && item[0].toLowerCase() !== "date") {
              item.unshift(collector.agents[collector.agents.length - 1].id);
              const [
                agentId,
                date,
                scheduledActivity,
                scheduledTime,
                actualTime,
                minInAdherence,
                minOutAdherence,
                percentInAdherence,
                occurence
              ] = item;
              collector.schedules.push({
                agentId,
                date,
                scheduledActivity,
                scheduledTime,
                actualTime,
                minInAdherence,
                minOutAdherence,
                percentInAdherence,
                occurence
              });
            }
          }
        }
        return collector;
      }, this.rows);
    }
  }

  private produceAgentStats() {
    const stats = this.rows.agents.reduce((collector, agent) => {
      const listOfAcitivities = this.rows.schedules.filter(
        record => record.agentId === agent.id
      );
      const percentInAdherenceValues: number[] = listOfAcitivities.map(item =>
        parseInt(item.percentInAdherence, 10)
      );
      const activitySet = new Set(listOfAcitivities.map(item => item.scheduledActivity));
      const percentWithActivities = listOfAcitivities.map(item => {
        return {
          scheduledActivity: item.scheduledActivity,
          percentInAdherence: item.percentInAdherence
        };
      });
      const countOfInAdherence = listOfAcitivities.length;
      const maxPercent = Math.max.apply(null, percentInAdherenceValues);
      const minPercent = Math.min.apply(null, percentInAdherenceValues);
      const countByActivity = [];
      activitySet.forEach((value) => {
        countByActivity.push({activity: value, count: percentWithActivities.filter(act => act.scheduledActivity === value).length});
      });
      collector.push({
        agentId: agent.id,
        countOfInAdherence,
        maxPercent,
        minPercent,
        percentValues: percentInAdherenceValues,
        activityCounts: countByActivity
      });
      return collector;
    }, []);
    console.log(stats);
  }
}
