<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible class="layout-sider">
    <div class="logo">{{ collapsed ? "antd" : title }}</div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']"  @click="handleClick">
      <template v-for="menu in menus">
        <a-sub-menu :key="menu.id" v-if="menu.children">
          <span slot="title"><a-icon type="mail" />{{ menu.title }}</span>
          <template v-for="list in menu.children">
            <a-sub-menu :key="list.id" v-if="list.children">
              <span slot="title">{{ list.title }}</span>
              <a-menu-item v-for="item in list.children" :key="item.id">
                <span>{{ item.title }}</span>
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :key="list.id">
              <span><a-icon type="mail" />{{ list.title }}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item v-else :key="menu.id">
          <span><a-icon type="mail" />{{ menu.title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "sider",
  data() {
    return {
      title: "ant-design-of-vue",
      menus: [
        {
          title: "Components",
          id: "01",
          children: [
            {
              title: "General 通用",
              id: "0101",
              children: [
                {
                  title: "Botton 按钮",
                  id: "010101"
                },
                {
                  title: "Icon 图标",
                  id: "010102"
                }
              ]
            },
            {
              title: "Layout 布局",
              id: "0102",
              children: [
                {
                  title: "Grid 栅格",
                  id: "010201"
                },
                {
                  title: "Layout 布局",
                  id: "010202"
                }
              ]
            },
            {
              title: "Navigation 导航",
              id: "0103",
              children: [
                {
                  title: "Affix 固钉",
                  id: "010301"
                },
                {
                  title: "Breadcrumb 面包屑",
                  id: "010302"
                },
                {
                  title: "Dropdown 下拉菜单",
                  id: "010303"
                },
                {
                  title: "Menu 导航菜单",
                  id: "010304"
                },
                {
                  title: "PageHeader 页头",
                  id: "010305"
                },
                {
                  title: "Pagination 分页",
                  id: "010306"
                },
                {
                  title: "Steps 步骤条",
                  id: "010307"
                }
              ]
            },
            {
              title: "Data Entry 数据录入",
              id: "0104",
              children: [
                {
                  title: "AutoComplete 自动完成",
                  id: "010401"
                },
                {
                  title: "Cascader 级联选择",
                  id: "010402"
                },
                {
                  title: "Checkbox 多选框",
                  id: "010403"
                },
                {
                  title: "DatePicker 日期选择框",
                  id: "010404"
                },
                {
                  title: "Form 表单",
                  id: "010405"
                },
                {
                  title: "FormModel 表单",
                  id: "010406"
                },
                {
                  title: "Input 输入框",
                  id: "010407"
                },
                {
                  title: "InputNumber 数字输入框",
                  id: "010408"
                },
                {
                  title: "Mentions 提及",
                  id: "010409"
                },
                {
                  title: "Radio 单选框",
                  id: "010410"
                },
                {
                  title: "Rate 评分",
                  id: "010411"
                },
                {
                  title: "Select 选择器",
                  id: "010412"
                },
                {
                  title: "Slider 滑动输入条",
                  id: "010413"
                },
                {
                  title: "Switch 开关",
                  id: "010414"
                },
                {
                  title: "TimePicker 时间选择框",
                  id: "010415"
                },
                {
                  title: "Transfer 穿梭框",
                  id: "010416"
                },
                {
                  title: "TreeSelect 树选择",
                  id: "010417"
                },
                {
                  title: "Upload 上传",
                  id: "010418"
                }
              ]
            },
            {
              title: "Data Display 数据展示",
              id: "0105",
              children: [
                {
                  title: "Avatar 头像",
                  id: "010501"
                },
                {
                  title: "Badge 徽标数",
                  id: "010502"
                },
                {
                  title: "Calendar 日历",
                  id: "010503"
                },
                {
                  title: "Card 卡片",
                  id: "010504"
                },
                {
                  title: "Carousel 走马灯",
                  id: "010505"
                },
                {
                  title: "Collapse 折叠面板",
                  id: "010506"
                },
                {
                  title: "Comment 评论",
                  id: "010507"
                },
                {
                  title: "Descriptions 描述列表",
                  id: "010508"
                },
                {
                  title: "Empty 空状态",
                  id: "010509"
                },
                {
                  title: "List 列表",
                  id: "010510"
                },
                {
                  title: "Popover 气泡卡片",
                  id: "010511"
                },
                {
                  title: "Statistic 统计数值",
                  id: "010512"
                },
                {
                  title: "Table 表格",
                  id: "010513"
                },
                {
                  title: "Tabs 标签页",
                  id: "010514"
                },
                {
                  title: "Tag 标签",
                  id: "010515"
                },
                {
                  title: "Timeline 时间轴",
                  id: "010516"
                },
                {
                  title: "Tooltip 文字提示",
                  id: "010517"
                },
                {
                  title: "Tree 树形控件",
                  id: "010518"
                }
              ]
            },

            {
              title: "Feedback 反馈",
              id: "0106",
              children: [
                {
                  title: "Alert 警告提示",
                  id: "010601"
                },
                {
                  title: "Drawer 抽屉",
                  id: "010602"
                },
                {
                  title: "Message 全局提示",
                  id: "010603"
                },
                {
                  title: "Modal 对话框",
                  id: "010604"
                },
                {
                  title: "Notification 通知提醒框",
                  id: "010605"
                },
                {
                  title: "Popconfirm 气泡确认框",
                  id: "010606"
                },
                {
                  title: "Progress 进度条",
                  id: "010607"
                },
                {
                  title: "Result 结果",
                  id: "010608"
                },
                {
                  title: "Skeleton 骨架屏",
                  id: "010609"
                },
                {
                  title: "Spin 加载中",
                  id: "010610"
                }
              ]
            },

            {
              title: "Other 其他",
              id: "0107",
              children: [
                {
                  title: "Anchor 锚点",
                  id: "010701"
                },
                {
                  title: "BackTop 回到顶部",
                  id: "010702"
                },
                {
                  title: "ConfigProvider 全局化配置",
                  id: "010703"
                },
                {
                  title: "Divider 分割线",
                  id: "010704"
                },
                {
                  title: "LocaleProvider 国际化",
                  id: "010705"
                }
              ]
            }
          ]
        },
        {
          title: "test2",
          id: "02",
          children: [
            {
              title: "General",
              id: "0201"
            }
          ]
        },
        {
          title: "test3",
          id: "03"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("app/", ["collapsed"])
  },
  created() {},
  methods:{
    handleClick(e){
      console.log(e);
      
    },
    titleClick(e){
      console.log(e);
      
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-sider{
  max-width: 300px!important;
  width: 300px!important;
}
.logo {
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  overflow: hidden;
}
</style>