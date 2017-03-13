'use strict';

angular.module('questionnaireApp', ['ui.router'])
    .controller('myCtrl', ['$scope', function($scope) {

        var obj = ['选项1','选项2','选项3','选项4',]

        var data1 = [
            {
                'name':'选项1',
                'value':0.6
            },
            {
                'name':'选项2',
                'value':0.14
            },
            {
                'name':'选项3',
                'value':0.2
            },
            {
                'name':'选项4',
                'value':0.06
            }
        ]
        
        // var option = {
        //         tooltip : {
        //             trigger: 'item',
        //             formatter: "{a} <br/>{b} : {c} ({d}%)"
        //         },
        //         legend: {
        //             orient : 'horizontal',
        //             x : 'left',
        //             data: obj
        //         },
                   
        //         calculable : true,
        //         series : [
        //             {
        //                 name:'统计结果',
        //                 type:'pie',
        //                 radius : [80, 120],//半径，默认为Min(width, height) / 2 - 50, 传数组实现环形图，[内半径，外半径]
        //                 itemStyle :　{
        //                     normal : {//默认样式
        //                         label : {
        //                             show : true
        //                         },
        //                         labelLine : {
        //                             show : false
        //                         }
        //                     },
        //                     emphasis : {//强调样式（悬浮时样式
        //                         label : {
        //                             show : true,
        //                             position : 'center',
        //                             textStyle : {
        //                                 fontSize : '30',
        //                                 fontWeight : 'bold'
        //                             }
        //                         }
        //                     }
        //                 },
        //                 data:data1
        //             }
        //         ]
        // };

        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
            },
            toolbox: {
                show : true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'邮件营销',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'搜索引擎',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        itemStyle:{
                            normal:{
                                lineStyle:{
                                    type: 'dashed'
                                }
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'百度',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'谷歌',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'必应',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        }

        require([
            'echarts',
            'echarts/chart/bar',
            // 'echarts/chart/line',
        ],function(ec) {
            console.log(ec)
            var myChart1 = ec.init(document.getElementById('myechartsdemo1'));
            myChart1.setOption(option);
        });

}])
