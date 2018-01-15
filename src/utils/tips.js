export const confirm=(vm,parma)=>{
    vm.$confirm(parma.txt, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            parma.success&&parma.success();
        })
        .catch(() => {
            parma.cancel&&parma.cancel();
        });     
}
