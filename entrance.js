import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

// 阻止启动生产消息
Vue.config.productionTip = false

export default Vue