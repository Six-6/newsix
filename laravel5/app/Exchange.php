<?php namespace App;
/**
 * 兑换页面显示
 * @褚玉密
 */
use Illuminate\Database\Eloquent\Model;
use App\E_type;
class Exchange extends Model {
    public $table="exchange";
    /**
     * @兑换查询
     */
    public static function selAll(){
        $data = E_type::selAll();
        foreach($data as $k => $v){
            $re[]=self::where('e_type.t_id',$v['t_id'])
                ->join("e_type","exchange.t_id","=","e_type.t_id")
                ->get()
                ->toArray();
        };
        print_r($re);die;
        return $re;
    }
    /**
     * 兑换商品详情
     */
    public static function shows($id){
        $re=self::where("e_id",$id)->get();
        return $re;
    }
    /**
     * 兑换商品名称验证
     */
    public static function name($name){
        $re=self::where(["e_name"=>$name])->get()->toArray();
        return $re;
    }
    /**
     * 兑换商品添加
     */
    public static function add($re){
        $ar=self::insert($re);
        return $ar;
    }
    /**
     * 后台兑换商品展示
     */
    public static function show(){
        $re=self::join("e_type","exchange.t_id","=","e_type.t_id")->get();
        return $re;

    public static function show($page){
        $data=self::join("e_type","exchange.t_id","=","e_type.t_id")->get();
        $num = 10;							 //分页从哪个下标开始
        $count = count($data);
        $mexpage = ceil($count/$num);		 //向上取整
        if (empty($page))
        {
            $page = 1;
        }
        if ($page<1)
        {
            $page = 1;
        }
        if ($page>$mexpage)
        {
            $page = $mexpage;
        }
        $reg="/^\d+$/";
        if (!preg_match($reg,$page)) {
            $page=1;
        }
        $xia=($page-1)*$num;
        $transmit['data']= self::join("e_type","exchange.t_id","=","e_type.t_id")->skip($xia)
            ->take(6)->get();
        //最大页 当前页 下一页 上一页
        $transmit['mexpage'] = $mexpage;
        $transmit['page'] = $page;
        $transmit['next'] = $page+1;
        $transmit['last'] = $page-1;
        $transmit['url'] = "exchangeShow";
        return $transmit;
    }
}
