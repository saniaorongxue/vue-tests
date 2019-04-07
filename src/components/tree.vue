<template>
    <div class="tree">
      <h3>
        <span>已选择{{checkLength}}人</span>/
        <span>总共{{allLength}}人</span>
      </h3>
      <section>
        <h4>快捷操作</h4>
        <p>
          <el-checkbox v-model="allChoose" @change="allChecked">全选</el-checkbox>
          <el-checkbox v-model="unAllChoose" @change="unAllChecked">反选</el-checkbox>
        </p>
      </section>
      <ul class="top">
        <li v-for="(top, index) in personList" :key="index" >
          <el-checkbox v-model="top.checked"@change="topCheckChecked(index)">{{top.name}}</el-checkbox>
          <ul class="subList">
            <li v-for="(subList, subIndex) in top.children" :key="subIndex">
              <el-checkbox v-model="subList.checked" @change="subListCheckChecked(index, subIndex)">{{subList.name}}</el-checkbox>
              <ul class="child">
                <li v-for="(child, childIndex) in subList.children" :key="childIndex">
                  <el-checkbox v-model="child.checked" @change="childCheckChecked(index, subIndex, childIndex)">{{child.name}}</el-checkbox>
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
              allChoose: false,
              unAllChoose: false,
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
              ],
              choosePersonList: []
            }
        },
        mounted() {
          this.totalPerson();
        },
        computed: {

        },
        watch: {
          choosePersonList() {
            this.checkLength = this.choosePersonList.length;
          }
        },
        methods: {
          /*
          * 总人数
          * */
          totalPerson() {
            for(let i in this.personList) {
              for(let j in this.personList[i].children) {
                this.allLength += this.personList[i].children[j].children.length;
              }
            }

          },
          /*
          * 一级目录选择
          * */
          topCheckChecked(index) {
            let flag = this.personList[index].checked;
            for(let i in this.personList[index].children){
              this.personList[index].children[i].checked = flag;
              for(let j in this.personList[index].children[i].children){
                this.personList[index].children[i].children[j].checked = flag;
              }
            }
            this.isAll();
            this.choosePerson();
          },
          /*
          * 二级目录
          * */
          subListCheckChecked(index, subIndex) {
            let flag = this.personList[index].children[subIndex].checked;
            for(let i in this.personList[index].children[subIndex].children) {
              this.personList[index].children[subIndex].children[i].checked = flag;
            }
            this.checkCheckedTop(index);
            this.isAll();
            this.choosePerson();
          },
          /*
          * 三级目录
          * */
          childCheckChecked(index, subIndex, childIndex) {
            for(let item of this.personList[index].children[subIndex].children) {
              if(!item.checked) {
                this.personList[index].children[subIndex].checked = false;
                this.personList[index].checked = false;
                this.allChoose = false;
                this.choosePerson();
                return false;
              }
            }
            this.personList[index].children[subIndex].checked = true;
            this.checkCheckedTop(index);
            this.choosePerson();
          },
          /*
          * 判断一级目录
          * */
          checkCheckedTop(index) {
            for(let item of this.personList[index].children) {
              if(!item.checked) {
                this.personList[index].checked = false;
                this.allChoose = false;
                this.choosePerson();
                return false;
              }
            }
            this.personList[index].checked = true;
            this.isAll();
            this.choosePerson();
          },
          /*
          * 全选
          * */
          allChecked() {
            let flag = this.allChoose;
            this.unAllChoose = false;
            for(let i in this.personList) {
              this.personList[i].checked = flag;
              for(let j in  this.personList[i].children) {
                this.personList[i].children[j].checked = flag;
                for(let k in this.personList[i].children[j].children) {
                  this.personList[i].children[j].children[k].checked = flag;
                }
              }
            }
            this.choosePerson();
          },
          /*
          * 判断全选
          * */
          isAll() {
            for(let item of this.personList) {
              if(!item.checked) {
                this.allChoose = false;
                this.choosePerson();
                return false;
              }
            }
            this.allChoose = true;
            this.choosePerson();
          },
          /*
          * 反选
          * */
          unAllChecked() {
            this.allChoose = false;
            for(let i in this.personList) {
              this.personList[i].checked = false;
              for(let j in this.personList[i].children) {
                this.personList[i].children[j].checked = false;
                for(let k in this.personList[i].children[j].children) {
                  this.personList[i].children[j].children[k].checked = false;
                }
              }
            }
            this.choosePerson();
          },
          /*
          * 获取数据
          * */
          choosePerson() {
            this.choosePersonList = [];
            for(let i in this.personList) {
              for(let j in this.personList[i].children) {
                for(let k in this.personList[i].children[j].children) {
                  if(this.personList[i].children[j].children[k].checked) {
                    if(this.choosePersonList.length === 0) {
                      this.choosePersonList.push(this.personList[i].children[j].children[k]);
                    }else{
                      let isPush = true;
                      for(let m in this.choosePersonList) {
                        if(this.choosePersonList[m].name === this.personList[i].children[j].children[k].name) {
                          isPush = false;
                        }
                      }
                      if(isPush) {
                        this.choosePersonList.push(this.personList[i].children[j].children[k]);
                      }
                    }
                  }
                }
              }
            }
            console.log(this.choosePersonList)
          }
        }
    }
</script>

<style lang="less" scoped>
    .tree {
      background: #0a264a;
      width: 100vw;
      height: 100vh;
      color: #fff;
      ul{
        list-style: none;
      }
      .top{
        margin-left: 20px;
        .subList{
          margin-left: 30px;
          .child{
            margin-left: 30px;
          }
        }
        .el-checkbox{
          color: #fff;
        }
      }
    }
</style>
