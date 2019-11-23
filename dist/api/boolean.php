<?php
    //接口整理方案二：准备两个接口：select
    include 'conn.php';

    $sql = isset($_REQUEST['sql']) ? $_REQUEST['sql'] : '';//sql语句是传过来

    $res = $conn->query($sql);
    if($res->num_rows){
        //num_rows有大于0的数值，证明在数据库里找到相同的》》即不能注册
        echo 'no';
    }else{
        echo 'yes';
    }
    // $arr = $res->fetch_all(MYSQLI_ASSOC);

    // echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成字符串，传给前端

    //3.关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库

?>