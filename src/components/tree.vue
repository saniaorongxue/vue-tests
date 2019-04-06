<template>
    <div class="tree">
      <h3>
        <span>已选择{{checkLength}}人</span>/
        <span>总共{{allLength}}人</span>
      </h3>
      <ul>
        <li v-for="(top, index) in personList" :key="index">
          <el-checkbox v-model="top.checked"></el-checkbox>
          <span>{{top.name}}</span>
          <ul>
            <li v-for="(subList, subIndex) in top.children" :key="subIndex">
              <el-checkbox v-model="subList.checked"></el-checkbox>
              <span>{{subList.name}}</span>
              <ul>
                <li v-for="(child, childIndex) in subList.children" :key="childIndex">
                  <el-checkbox v-model="child.checked"></el-checkbox>
                  <span>{{child.name}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "tree",
        data() {
            return {
              checkLength: 0,
              allLength: 0,
              personList: [
                {
                  type: 1,
                  name: '一级目录1',
                  checked: false,
                  children: [
                    {
                      type: 2,
                      name: '二级目录11',
                      checked: false,
                      children: [
                        {
                          type: 3,
                          name: '三级目录111',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录112',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录113',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录114',
                          checked: false,
                        }
                      ]
                    },
                    {
                      type: 2,
                      name: '二级目录12',
                      checked: false,
                      children: [
                        {
                          type: 3,
                          name: '三级目录121',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录122',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录123',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录124',
                          checked: false,
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 1,
                  name: '一级目录2',
                  checked: false,
                  children: [
                    {
                      type: 2,
                      name: '二级目录21',
                      checked: false,
                      children: [
                        {
                          type: 3,
                          name: '三级目录211',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录212',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录213',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录214',
                          checked: false,
                        }
                      ]
                    },
                    {
                      type: 2,
                      name: '二级目录22',
                      checked: false,
                      children: [
                        {
                          type: 3,
                          name: '三级目录221',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录222',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录223',
                          checked: false,
                        },
                        {
                          type: 3,
                          name: '三级目录224',
                          checked: false,
                        }
                      ]
                    }
                  ]
                }
              ]
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .tree {

      ul{
        list-style: none;
      }
    }
</style>
