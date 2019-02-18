import React from 'react';

import { Grid, Image, Segment} from 'semantic-ui-react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, RadialChart, Treemap, Sunburst} from 'react-vis';

const myData = [{angle: 1}, {angle: 5}, {angle: 2}]


const sunData = {
    "title": "analytics",
    "color": "#12939A",
    "children": [
     {
      "title": "cluster",
      "children": [
       {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
       {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
       {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
       {"title": "MergeEdge", "color": "#12939A", "size": 743}
      ]
     },
     {
      "title": "graph",
      "children": [
       {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
       {"title": "LinkDistance", "color": "#12939A", "size": 5731},
       {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
       {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
       {"title": "SpanningTree", "color": "#12939A", "size": 3416}
      ]
     },
     {
      "title": "optimization",
      "children": [
       {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
      ]
     }
    ]
   }

const treeData = {
    "title": "analytics",
    "color": "#12939A",
    "children": [
     {
      "title": "cluster",
      "children": [
       {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
       {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
       {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
       {"title": "MergeEdge", "color": "#12939A", "size": 743}
      ]
     },
     {
      "title": "graph",
      "children": [
       {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
       {"title": "LinkDistance", "color": "#12939A", "size": 5731},
       {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
       {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
       {"title": "SpanningTree", "color": "#12939A", "size": 3416}
      ]
     },
     {
      "title": "optimization",
      "children": [
       {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
      ]
     }
    ]
   }

const Analytics = ()=>{
    return (
        <Segment style={{height: "100%",scroll: false}} >
            <h1 style={{textAlign: "center"}}>Analytics</h1>
 <Grid columns={4} centered>
            <Grid.Row verticalAlign='top'>
            <Grid.Column>
            <h1 style={{textAlign: "center"}}>Tree Map</h1>

            <Treemap
                label="tree map"
                title={'My New Treemap'}
                width={300}
                height={300}
                data={treeData}
                />

            </Grid.Column>
            <Grid.Column>
            <h1 style={{textAlign: "center"}}>Plotted Graph</h1>

            <XYPlot
                label="some plotting"
                width={300}
                height={300}>
                <HorizontalGridLines />
                <LineSeries
                    label="plotting"
                    data={[
                    {x: 1, y: 10},
                    {x: 2, y: 5},
                    {x: 3, y: 15}
                    ]}/>
                <XAxis />
                <YAxis />
                </XYPlot>

                
                <br />
                <RadialChart
                    data={myData}
                    width={300}
                    height={300} />
            </Grid.Column>
            <Grid.Column>
            <h1 style={{textAlign: "center"}}>Sunburst Chart</h1>

            <Sunburst
                hideRootNode
                colorType="literal"
                data={sunData}
                height={300}
                width={350}/>


            </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
           
    )
}
export default Analytics;
