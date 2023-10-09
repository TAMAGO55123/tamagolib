'use strict'
/**
 * コンソール用のクラス
 */

class consolei{
    /**
     * 
     * @param {boolean} coif 
     */
    constructor(coif=1){
        this.coif=coif;
    }

    /**
     * ログ
     * 
     * 引数
     * value : 文字など
     * @param {string} value
     */
    log(value){
        if(this.coif){
            console.log(value);
        }
    }

    /**
     * エラー
     * 
     * 引数
     * value : 文字など
     * @param {string} value
     */
    error(value){
        if(this.coif){
            console.error(value);
        }
    }

    /**
     * 情報
     * 
     * 引数
     * value : 文字など
     * @param {string} value
     */
    info(value){
        if(this.coif){
            console.info(value);
        }
    }

    /**
     * 注意
     * 
     * 引数
     * value : 文字など
     * @param {string} value
     */
    warn(value){
        if(this.coif){
            console.warn(value);
        }
    }

    /**
     * クリア
     */
    clear(){
        console.clear();
    }
}