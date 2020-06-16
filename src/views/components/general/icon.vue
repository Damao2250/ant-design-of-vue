<template>
  <div class="icon-con">
    <a-radio-group
      :value="style"
      size="large"
      @change="handleSizeChange"
      class="btn-style"
    >
      <a-radio-button value="线框风格">
        线框风格
      </a-radio-button>
      <a-radio-button value="实底风格">
        实底风格
      </a-radio-button>
      <a-radio-button value="双色风格">
        双色风格
      </a-radio-button>
    </a-radio-group>
    <div v-for="(list, idx) in icons" :key="idx">
      <span class="icon-title">{{ list.type }}</span>
      <a-row>
        <template v-for="(item, id) in list.icons" >
          <a-col :span="3" :key="id">
            <div class="icon-item" @click="toCopy(item)">
              <div class="icon">
                <a-icon :type="item" :style="{ fontSize: '32px' }" />
              </div>
              <div :ref="item">{{ item }}</div>
            </div>
          </a-col>
        </template>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style1: [
        {
          type: "方向性图标",
          icons: [
            "step-backward",
            "step-forward",
            "fast-backward",
            "fast-forward",
            "shrink",
            "arrows-alt",
            "down",
            "up",
            "left",
            "right",
            "caret-up",
            "caret-down",
            "caret-left",
            "caret-right",
            "up-circle",
            "down-circle",
            "left-circle",
            "right-circle",
            "double-right",
            "double-left",
            "vertical-left",
            "vertical-right",
            "vertical-align-top",
            "vertical-align-middle",
            "vertical-align-bottom",
            "forward",
            "backward",
            "rollback",
            "enter",
            "retweet",
            "swap",
            "swap-left",
            "swap-right",
            "arrow-up",
            "arrow-down",
            "arrow-left",
            "arrow-right",
            "play-circle",
            "up-square",
            "down-square",
            "left-square",
            "right-square",
            "login",
            "logout",
            "menu-fold",
            "menu-unfold",
            "border-bottom",
            "border-horizontal",
            "border-inner",
            "border-outer",
            "border-left",
            "border-right",
            "border-top",
            "border-verticle",
            "pic-center",
            "pic-left",
            "pic-right",
            "radius-bottomleft",
            "radius-bottomright",
            "radius-upleft",
            "radius-upright",
            "fullscreen",
            "fullscreen-exit"
          ]
        },
        {
          type: "提示建议性图标",
          icons: [
            "question",
            "question-circle",
            "plus",
            "plus-circle",
            "pause",
            "pause-circle",
            "minus",
            "minus-circle",
            "plus-square",
            "minus-square",
            "info",
            "info-circle",
            "exclamation",
            "exclamation-circle",
            "close",
            "close-circle",
            "close-square",
            "check",
            "check-circle",
            "check-square",
            "clock-circle",
            "warning",
            "issues-close",
            "stop"
          ]
        },
        {
          type: "编辑类图标",
          icons: [
            "edit",
            "form",
            "copy",
            "scissor",
            "delete",
            "snippets",
            "diff",
            "highlight",
            "align-center",
            "align-left",
            "align-right",
            "bg-colors",
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "redo",
            "undo",
            "zoom-in",
            "zoom-out",
            "font-colors",
            "font-size",
            "line-height",
            "dash",
            "small-dash",
            "sort-ascending",
            "sort-descending",
            "drag",
            "ordered-list",
            "unordered-list",
            "radius-setting",
            "column-width",
            "column-height"
          ]
        },
        {
          type: "数据类图标",
          icons: [
            "area-chart",
            "pie-chart",
            "bar-chart",
            "dot-chart",
            "line-chart",
            "radar-chart",
            "heat-map",
            "fall",
            "rise",
            "stock",
            "box-plot",
            "fund",
            "sliders"
          ]
        },
        {
          type: "品牌和标识",
          icons: [
            "android",
            "apple",
            "windows",
            "ie",
            "chrome",
            "github",
            "aliwangwang",
            "dingding",
            "weibo-square",
            "weibo-circle",
            "taobao-circle",
            "html5",
            "weibo",
            "twitter",
            "wechat",
            "youtube",
            "alipay-circle",
            "taobao",
            "skype",
            "qq",
            "medium-workmark",
            "gitlab",
            "medium",
            "linkedin",
            "google-plus",
            "dropbox",
            "facebook",
            "codepen",
            "code-sandbox",
            "amazon",
            "google",
            "codepen-circle",
            "alipay",
            "ant-design",
            "ant-cloud",
            "aliyun",
            "zhihu",
            "slack",
            "slack-square",
            "behance",
            "behance-square",
            "dribbble",
            "dribbble-square",
            "instagram",
            "yuque",
            "alibaba",
            "yahoo",
            "reddit",
            "sketch"
          ]
        },
        {
          type: "网站通用图标",
          icons: [
            "account-book",
            "alert",
            "api",
            "appstore",
            "audio",
            "bank",
            "bell",
            "book",
            "bug",
            "bulb",
            "calculator",
            "build",
            "calendar",
            "camera",
            "car",
            "carry-out",
            "cloud",
            "code",
            "compass",
            "contacts",
            "container",
            "control"
          ]
        }
      ],
      style2: [
        {
          type: "方向性图标",
          icons: [
            "step-backward",
            "step-forward",
            "fast-backward",
            "fast-forward",
            "caret-up",
            "caret-down",
            "caret-left",
            "caret-right",
            "up-circle",
            "down-circle",
            "left-circle",
            "right-circle",
            "forward",
            "backward",
            "play-circle",
            "up-square",
            "down-square",
            "left-square",
            "right-square"
          ]
        },
        {
          type: "提示建议性图标",
          icons: [
            "question-circle",
            "plus-circle",
            "pause-circle",
            "minus-circle",
            "plus-square",
            "minus-square",
            "info-circle",
            "exclamation-circle",
            "close-circle",
            "close-square",
            "check-circle",
            "check-square",
            "clock-circle",
            "warning",
            "stop"
          ]
        },
        {
          type: "编辑类图标",
          icons: ["edit", "copy", "delete", "snippets", "diff", "highlight"]
        },
        {
          type: "数据类图标",
          icons: ["pie-chart", "box-plot", "fund", "sliders"]
        },
        {
          type: "品牌和标识",
          icons: [
            "android",
            "apple",
            "windows",
            "chrome",
            "github",
            "aliwangwang",
            "weibo-square",
            "weibo-circle",
            "taobao-circle",
            "html5",
            "wechat",
            "youtube",
            "alipay-circle",
            "skype",
            "gitlab",
            "linkedin",
            "facebook",
            "code-sandbox-circle",
            "codepen-circle",
            "slack-square",
            "behance-square",
            "dribbble-square",
            "instagram",
            "yuque",
            "yahoo"
          ]
        },
        {
          type: "网站通用图标",
          icons: [
            "account-book",
            "alert",
            "alipay-square",
            "amazon-circle",
            "amazon-square",
            "api",
            "appstore",
            "audio",
            "bank",
            "behance-circle",
            "bell",
            "book",
            "bug",
            "bulb",
            "calculator",
            "build",
            "calendar",
            "camera",
            "car",
            "carry-out",
            "ci-circle",
            "cloud",
            "code-sandbox-square",
            "code",
            "compass",
            "codepen-square",
            "contacts",
            "container",
            "control",
            "copyright-circle",
            "credit-card",
            "crown",
            "customer-service",
            "dashboard",
            "dingtalk-circle",
            "database",
            "dingtalk-square",
            "dislike",
            "dollar-circle",
            "dribbble-circle",
            "dropbox-circle",
            "dropbox-square",
            "environment",
            "euro-circle",
            "experiment",
            "eye-invisible",
            "eye",
            "file-add",
            "file-excel",
            "file-exclamation",
            "file-image",
            "file-markdown",
            "file-pdf",
            "file-ppt",
            "file-text",
            "file-unknown",
            "file-word",
            "file-zip",
            "file",
            "filter",
            "fire",
            "flag",
            "folder-add",
            "folder",
            "folder-open",
            "frown",
            "funnel-plot",
            "gift",
            "golden",
            "google-circle",
            "google-plus-circle",
            "google-plus-square",
            "google-square",
            "hdd",
            "heart",
            "home",
            "hourglass",
            "idcard",
            "ie-circle",
            "ie-square",
            "insurance",
            "interaction",
            "layout",
            "like",
            "lock",
            "mail",
            "medicine-box",
            "medium-circle",
            "medium-square",
            "meh",
            "message",
            "mobile",
            "money-collect",
            "pay-circle",
            "notification",
            "phone",
            "picture",
            "play-square",
            "pound-circle",
            "printer",
            "profile",
            "project",
            "pushpin",
            "property-safety",
            "qq-circle",
            "qq-square",
            "read",
            "reconciliation",
            "red-envelope",
            "reddit-circle",
            "reddit-square",
            "rest",
            "rocket",
            "safety-certificate",
            "save",
            "schedule",
            "security-scan",
            "setting",
            "shop",
            "shopping",
            "sketch-circle",
            "sketch-square",
            "skin",
            "slack-circle",
            "smile",
            "sound",
            "star",
            "switcher",
            "tablet"
          ]
        }
      ],
      style3: [
        {
          type: "方向性图标",
          icons: [
            "up-circle",
            "down-circle",
            "left-circle",
            "right-circle",
            "play-circle",
            "up-square",
            "down-square",
            "left-square",
            "right-square"
          ]
        },
        {
          type: "提示建议性图标",
          icons: [
            "question-circle",
            "plus-circle",
            "pause-circle",
            "minus-circle",
            "plus-square",
            "minus-square",
            "info-circle",
            "exclamation-circle",
            "close-circle",
            "close-square",
            "check-circle",
            "check-square",
            "clock-circle",
            "warning",
            "stop"
          ]
        },
        {
          type: "编辑类图标",
          icons: ["edit", "copy", "delete", "snippets", "diff", "highlight"]
        },
        {
          type: "数据类图标",
          icons: ["pie-chart", "box-plot", "fund", "sliders"]
        },
        {
          type: "品牌和标识",
          icons: ["html5"]
        },
        {
          type: "网站通用图标",
          icons: [
            "account-book",
            "alert",
            "api",
            "appstore",
            "audio",
            "bank",
            "bell",
            "book",
            "bug",
            "bulb",
            "calculator",
            "build",
            "calendar",
            "camera",
            "car",
            "carry-out",
            "cloud",
            "code",
            "compass",
            "contacts",
            "container",
            "control",
            "credit-card",
            "crown",
            "customer-service",
            "dashboard",
            "database",
            "dislike",
            "environment",
            "experiment",
            "eye-invisible",
            "eye",
            "file-add",
            "file-excel",
            "file-exclamation",
            "file-image",
            "file-markdown",
            "file-pdf",
            "file-ppt",
            "file-text",
            "file-unknown",
            "file-word",
            "file-zip",
            "file",
            "filter",
            "fire",
            "flag",
            "folder-add",
            "folder",
            "folder-open",
            "frown",
            "funnel-plot",
            "gift",
            "hdd",
            "heart",
            "home",
            "hourglass",
            "idcard",
            "insurance",
            "interaction",
            "layout",
            "like",
            "lock",
            "mail",
            "medicine-box",
            "meh",
            "message",
            "mobile",
            "money-collect",
            "notification",
            "phone",
            "picture",
            "play-square",
            "pound-circle",
            "printer",
            "profile",
            "project",
            "pushpin",
            "property-safety",
            "reconciliation",
            "red-envelope",
            "rest",
            "rocket",
            "safety-certificate",
            "save",
            "schedule",
            "security-scan",
            "setting",
            "shop",
            "shopping",
            "skin",
            "smile",
            "sound",
            "star",
            "switcher",
            "tablet",
            "tag",
            "tags",
            "tool",
            "thunderbolt",
            "trademark-circle",
            "trophy",
            "unlock",
            "usb",
            "video-camera",
            "wallet",
            "ci",
            "copyright",
            "dollar",
            "euro",
            "gold"
          ]
        }
      ],
      icons: [],
      style: "线框风格"
    };
  },
  created() {
    this.icons = this.style1;
  },
  methods: {
    handleSizeChange(e) {
      this.style = e.target.value;
      switch (e.target.value) {
        case "线框风格":
          this.icons = this.style1;
          break;
        case "实底风格":
          this.icons = this.style2;
          break;
        case "双色风格":
          this.icons = this.style3;
          break;
        default:
          break;
      }
    },
    toCopy(item) {
      let input = document.createElement('input')
      input.setAttribute('readonly', 'readonly') // 防止手机上弹出软键盘
      input.setAttribute('value', item) // txval 为所需复制的值 变量 或者 写死
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.$message.info('复制成功：'+ item);
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-con {
  min-width: 1200px;
}
.icon-title {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}
.icon-item {
  margin: 5px;
  padding: 40px 0;
  border-radius: 3px;
  color: #555;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  div {
    text-align: center;
  }
  &:hover {
    background: #1890ff;
    color: #fff;
  }
  &:hover .icon {
    color: #fff;
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transform: scale(1.2);
  }
}
.btn-style {
  margin-bottom: 20px;
}
</style>