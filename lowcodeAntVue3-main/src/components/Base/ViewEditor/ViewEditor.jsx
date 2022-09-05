import { resolveDynamicComponent,h, reactive ,defineComponent } from "vue";
import BaseComponents from "@/interface/compontens/BaseComponents.js";
import { antComponentsMap } from "@/lib/antVueLib/antCmpAbs.js";
import AntCmpDefTemp from "@/lib/antVueLib/AntCmpDefTemp.js"
import './index.scss'
export default defineComponent({
  name: "ViewEditor",
  setup(props) {
    //存储当前Lib组件库
    const addBtnList = reactive([]);
    const contentCmpList = [];
    const cmpList = reactive([]);
    const addCmp = (componentName) => {
      console.log(componentName)
      cmpList.push({
        type:componentName,
        props:{
          htmlText:'按钮1',//额外属性
          type:'primary'
        },
        event:[]
      })
      return true 
    };

    const getCmpNum = () => {
      console.log(BaseComponents.managementList);
    };

    const loadAllCmp = () => {
      for (const cmpName of antComponentsMap) {
        addBtnList.push(cmpName);
      }
    };
    loadAllCmp();
    cmpList.push({
      type:'AButton',
      props:{
        htmlText:'确定',//额外属性
        onClick:()=>{
          console.log('hello')
        }
      },
      event:[]//指emit发生的事件
      //....等待扩展
    })
    return () => (
        <div>
          <h1>
            Demo测试
          </h1>
          <div>
            <a-button onClick={()=>addCmp('AButton')}>
              增加一个按钮
            </a-button>
            <a-button onClick={()=>addCmp('AInput')}>
              增加一个输入框
            </a-button>
          </div>
          <div className="demo-list">
          {
            cmpList.map(item=>{
              return (
                h(resolveDynamicComponent(item.type),item.props,()=>item.props.htmlText) 
              )
            })
          }
          </div>
        </div>
      
    );
  },
})
