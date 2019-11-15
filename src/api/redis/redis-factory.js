/**
 * redis工厂
 * 1.创建连接
 * 2.获取一个客户端
 * 3.修改连接
 */
import low  from 'lowdb';
import fse from 'fs-extra';
import path from 'path';
import os from 'os';
import uuid from 'uuid';
import FileSync from 'lowdb/adapters/FileSync';
import packageJson from "../../../package";

/**
 * redis工厂
 */
class RedisFactory {
    /**
     * 获取redis配置数据库
     */
    getDataBase(){
        let dbPath = path.join(os.homedir(),packageJson.name,`redisClientConfig.json`);
        fse.ensureFileSync(dbPath);
        const adapter = new FileSync(dbPath);
        let db = low(adapter);
        db.defaults({hosts:[]}).write();
        return db;
    }
    /**
     * 创建链接
     * @param redisClientConfig
     * @return 返回一个该客户端标识
     */
    createHost(redisClientConfig){
        redisClientConfig.uid = uuid();
        this.getDataBase().get('hosts').push(redisClientConfig).write();
        console.log("创建Redis连接:",JSON.stringify(redisClientConfig));
        return redisClientConfig;
    }
    getHosts(){
        return this.getDataBase().get('hosts').value();
    }
    getHost(uid){
        return this.getDataBase().get('hosts').find({uid}).head().value();
    }
}
export const redisFactory = new RedisFactory();

