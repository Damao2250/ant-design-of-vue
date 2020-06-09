<template>
  <div class="botton">
    <div class="mg-b-10">按钮类型</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button type="primary">Primary </a-button>
      </div>
      <div class="mg-r-10">
        <a-button>Default</a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="dashed">Dashed </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="danger">Danger </a-button>
      </div>
      <div class="mg-r-10">
        <a-config-provider :auto-insert-space-in-button="false">
          <a-button type="primary">按钮 </a-button>
        </a-config-provider>
      </div>
      <div class="mg-r-10">
        <a-button type="primary">按钮 </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="link">Link </a-button>
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">按钮组合</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button-group>
          <a-button>Cancel</a-button>
          <a-button type="primary">
            OK
          </a-button>
        </a-button-group>
      </div>
      <div class="mg-r-10">
        <a-button-group>
          <a-button disabled>
            L
          </a-button>
          <a-button disabled>
            M
          </a-button>
          <a-button disabled>
            R
          </a-button>
        </a-button-group>
      </div>
      <div class="mg-r-10">
        <a-button-group>
          <a-button type="primary">
            L
          </a-button>
          <a-button>M</a-button>
          <a-button>M</a-button>
          <a-button type="dashed">
            R
          </a-button>
        </a-button-group>
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">按钮组合</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button type="primary">
          Primary
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" disabled>
          Primary(disabled)
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button>Default</a-button>
      </div>
      <div class="mg-r-10">
        <a-button disabled>
          Default(disabled)
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="dashed">
          Dashed
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="dashed" disabled>
          Dashed(disabled)
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="link">
          Link
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="link" disabled>
          Link(disabled)
        </a-button>
      </div>
    </div>
    <div
      :style="{
        padding: '8px',
        display: 'inline-block',
        marginTop: '10px',
        background: 'rgb(190, 200, 200)'
      }"
    >
      <div class="d-f">
        <div class="mg-r-10">
          <a-button ghost>
            Ghost
          </a-button>
        </div>
        <div class="mg-r-10">
          <a-button ghost disabled>
            Ghost(disabled)
          </a-button>
        </div>
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">幽灵按钮</div>
    <div
      :style="{
        padding: '8px',
        display: 'inline-block',
        background: 'rgb(190, 200, 200)'
      }"
    >
      <div class="d-f">
        <div class="mg-r-10">
          <a-button type="primary" ghost>
            Primary
          </a-button>
        </div>
        <div class="mg-r-10">
          <a-button ghost>
            Default
          </a-button>
        </div>
        <div class="mg-r-10">
          <a-button type="dashed" ghost>
            Dashed
          </a-button>
        </div>
        <div class="mg-r-10">
          <a-button type="danger" ghost>
            Danger
          </a-button>
        </div>
        <div class="mg-r-10">
          <a-button type="link" ghost>
            Link
          </a-button>
        </div>
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">图标按钮</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button type="primary" shape="circle" icon="search" />
      </div>
      <div class="mg-r-10">
        <a-button type="primary" shape="circle">A </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" icon="search">Search </a-button>
      </div>
      <div class="mg-r-10">
        <a-button shape="circle" icon="search" />
      </div>
      <div class="mg-r-10">
        <a-button icon="search">Search </a-button>
      </div>
      <div class="mg-r-10">
        <a-button shape="circle" icon="search" />
      </div>
      <div class="mg-r-10">
        <a-button icon="search">Search </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="dashed" shape="circle" icon="search" />
      </div>
      <div class="mg-r-10">
        <a-button type="dashed" icon="search">Search </a-button>
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">加载中状态</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button type="primary" loading>Loading </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" size="small" loading>Loading </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" :loading="loading" @mouseenter="enterLoading"
          >mouseenter me!
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button
          type="primary"
          icon="poweroff"
          :loading="iconLoading"
          @click="enterIconLoading"
          >延迟1s
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" loading />
      </div>
      <div class="mg-r-10">
        <a-button type="primary" shape="circle" loading />
      </div>
      <div class="mg-r-10">
        <a-button type="danger" shape="round" loading />
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">多个按钮组合</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button type="primary">Primary </a-button>
      </div>
      <div class="mg-r-10">
        <a-button>secondary</a-button>
      </div>
      <div class="mg-r-10">
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              1st item
            </a-menu-item>
            <a-menu-item key="2">
              2nd item
            </a-menu-item>
            <a-menu-item key="3">
              3rd item
            </a-menu-item>
          </a-menu>
          <a-button> Actions <a-icon type="down" /> </a-button>
        </a-dropdown>
      </div>
    </div>

    <div class="mg-b-10 mg-t-20">block 按钮</div>
    <!-- <div class="d-f"> -->
    <div class="mg-b-5">
      <a-button type="primary" block> Primary</a-button>
    </div>
    <div class="mg-b-5">
      <a-button block> Default </a-button>
    </div>
    <div class="mg-b-5">
      <a-button type="dashed" block> Dashed </a-button>
    </div>
    <div class="mg-b-5">
      <a-button type="danger" block> Danger </a-button>
    </div>
    <div class="mg-b-5">
      <a-button type="link" block> Link </a-button>
    </div>
    <!-- </div> -->

    <div class="mg-b-10 mg-t-20">按钮尺寸</div>
    <div class="d-f">
      <div class="mg-r-10">
        <a-button type="primary" block> Primary</a-button>
      </div>
      <div class="mg-r-10">
        <a-radio-group :value="size" @change="handleSizeChange">
          <a-radio-button value="large">Large </a-radio-button>
          <a-radio-button value="default">Default </a-radio-button>
          <a-radio-button value="small">Small </a-radio-button>
        </a-radio-group>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" :size="size">Primary </a-button>
      </div>
      <div class="mg-r-10">
        <a-button :size="size">Normal </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="dashed" :size="size">Dashed </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="danger" :size="size">Danger </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="link" :size="size">Link </a-button>
      </div>
      <div class="mg-r-10">
        <a-button type="primary" icon="download" :size="size" />
      </div>
      <div class="mg-r-10">
        <a-button type="primary" shape="circle" icon="download" :size="size" />
      </div>
      <div class="mg-r-10">
        <a-button type="primary" shape="round" icon="download" :size="size"
          >Download</a-button
        >
      </div>
      <div class="mg-r-10">
        <a-button type="primary" shape="round" icon="download" :size="size" />
      </div>
      <div class="mg-r-10">
        <a-button type="primary" icon="download" :size="size"
          >Download
        </a-button>
      </div>
      <div class="mg-r-10">
        <a-button-group :size="size">
          <a-button type="primary"> <a-icon type="left" />Backward </a-button>
          <a-button type="primary"> Forward<a-icon type="right" /> </a-button>
        </a-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
      size: "large"
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
    handleSizeChange(e) {
      this.size = e.target.value;
    }
  }
};
</script>