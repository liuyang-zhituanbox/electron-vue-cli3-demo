import {redisFactory} from './redis-factory';


class RedisClientConfig {
    uid;
    host;
    port;
    name;

    constructor(host='127.0.0.1', port=6379) {
        this.host = host;
        this.port = port;
    }
}
export default {redisFactory,RedisClientConfig};
