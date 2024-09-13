/* istanbul ignore file */
import ELK from 'elkjs';
// import { Worker as ElkWorker } from './package-patch/react-friendly-elk-worker.min';

const elk = new ELK();
const elkLayout = (params) => {
  const { initialNodes = [], initialEdges = [] } = params;
  const nodesForElk = initialNodes.map((node) => {
    return {
      id: node.id,
      height: 200,
    };
  });
  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.layered.layering.strategy': 'INTERACTIVE',
      'nodePlacement.strategy': 'NETWORK_SIMPLEX',
      'spacing.nodeNode': '20',
      'spacing.nodeNodeBetweenLayers': '200.0',
    },

    children: nodesForElk,
    edges: initialEdges,
  };
  return elk.layout(graph);
};

export default elkLayout;
