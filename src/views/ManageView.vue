<template>
  <el-container style="min-height: 100vh ">
    <el-aside :width="sideWidth +'px'"
              style="box-shadow: 2px 0 6px rgb(0, 221, 41 / 35%);">
      <AsideVue :isCollapse="isCollapse" :logoTextShow="logoTextShow"/>
    </el-aside>

    <el-container>
      <el-header style=" border-bottom: 1px solid #ccc; ">
        <HeaderVue :collapseBtnClass="collapseBtnClass" :collapse="isCollapse"/>

      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>


import AsideVue from "@/components/Aside.vue";
import HeaderVue from "@/components/Header.vue";



export default {
  name: 'HomeView',
  data () {
    return {
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      logoTextShow: true,
    }
  },

  components:{
    AsideVue,
    HeaderVue
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow = false
      } else {
        this.sideWidth = 200
        this.collapseBthClass = 'el-icon-s-fold'
        this.logoTextShow = true
      }
    }
   
  }
}

</Script>




