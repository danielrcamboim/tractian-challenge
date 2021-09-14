import "../common.css"
import { Card } from "antd"

import Highcharts from "highcharts/highcharts.js"
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js"
import HighchartsReact from "highcharts-react-official"

highchartsMore(Highcharts)
solidGauge(Highcharts)

const InfoCard = ({item}) => {
    
    const { Meta } = Card

    const { sensors, model, status, healthscore, name, image, metrics } = item

    const options = {
        chart: {
          type: "solidgauge",
          height: "90%"
        },
      
        title: {
          text: "Healthscore",
          style: {
            fontSize: "18px"
          }
        },
      
        pane: {
          startAngle: 5,
          endAngle: 360,
        },
      
        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          stops: [
            [0.1, '#DF5353'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#55BF3B'] // red
          ],
          tickPosition: 'outside',
          tickPositions: [25,50,75,100]
        },
      
        plotOptions: {
          solidgauge: {
            dataLabels: {
              enabled: false
            },
            linecap: "round",
            stickyTracking: false,
            rounded: false
          }
        },

        credits: {
            enabled: false
        },
      
        series: [
          {
            name: "health",
            type: "solidgauge",
            data: [
              {
                radius: "100%",
                innerRadius: "75%",
                y: healthscore
              }
            ]
          }
        ]
    }

    const tUt = metrics.totalUptime.toString()
    const totalUptimeFormated = tUt.split(".")[0]
    const lUt = metrics.lastUptimeAt.toString()
    const lastUptimeAtFormated = lUt.replace("T", " ").split(".")[0]

    return(
        <Card
            className="card"
            cover={
            <img
                className="card-img"
                alt="example"
                src={image}
            />
            }
            actions={[
            
            ]}
        >
            <h3>Sensors: {sensors}</h3>
            <h3 style={status === "inOperation" ? {backgroundColor: "lightgreen"} : (status === "inDowntime" ? {backgroundColor: "lightgrey"} : {backgroundColor: "lightcoral"})}>Status: {status}</h3>                
            <p>Model: {model}</p>
            <p>Name: {name}</p>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
            <p>totalCollectsUptime: {metrics.totalCollectsUptime}</p>
            <p>totalUptime: {totalUptimeFormated} horas</p>
            <p>lastUptimeAt: {lastUptimeAtFormated}</p>
        </Card>
    )
}

export default InfoCard