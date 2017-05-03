<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
                <el-breadcrumb-item>D3图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            D3 (or D3.js) is a JavaScript library for visualizing data using web standards.
            <span> NPM地址：<a href="https://www.npmjs.com/package/d3" target="_blank">d3.js</a></span>
        </div>
          <svg width="500" height="270">
            <g style="transform: translate(0, 10px)">
              <path :d="line" />
            </g>
          </svg>
    </div>
</template>

<script>
    import * as d3 from 'd3';
    export default {
      name: 'vue-line-chart',
      data() {
        return {
          data: [99, 71, 78, 25, 36, 92],
          line: '',
        };
      },
      mounted() {
        this.calculatePath();
      },
      methods: {
        getScales() {
          const x = d3.scaleTime().range([0, 430]);
          const y = d3.scaleLinear().range([210, 0]);
          d3.axisLeft().scale(x);
          d3.axisBottom().scale(y);
          x.domain(d3.extent(this.data, (d, i) => i));
          y.domain([0, d3.max(this.data, d => d)]);
          return { x, y };
        },
        calculatePath() {
          const scale = this.getScales();
          const path = d3.line()
            .x((d, i) => scale.x(i))
            .y(d => scale.y(d));
          this.line = path(this.data);
        },
      },
    };
</script>


<style scoped>
svg{
  margin: 25px;
}
path{
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
  }
</style>