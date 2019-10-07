const list = [
 {
  id: "123",
  fid: "",
  orgUid: "11",
  orgName: "全国",
  isDisabled: false,
  children: [ {
    id: "456",
    fid: "123",
    orgUid: "22",
    orgName: "北京市",
    isDisabled: false,
    children: [{
      id: "456",
      fid: "123",
      orgUid: "22",
      orgName: "海淀区",
      isDisabled: false
     },{
      id: "456",
      fid: "123",
      orgUid: "22",
      orgName: "朝阳区",
      isDisabled: false
     }
    ]
   },
   {
    id: "456",
    fid: "123",
    orgUid: "22",
    orgName: "上海市",
    isDisabled: false
   },
   {
    id: "456",
    fid: "123",
    orgUid: "22",
    orgName: "重庆市",
    isDisabled: false
   }
  ]
 }
];
const newList = [];
function transformData(data){
  for(let item of data){
   // console.log(item);
   item['title']= item['orgName'];
   item['key']= item['id']; 
   if(item.children && item.children.length > 0){
    return transformData(item.children);
   }
  }
  return data;
}
transformData(list);

console.dir(list);
