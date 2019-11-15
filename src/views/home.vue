<template>
    <div class="home">
        <Button type="primary" @click="createRedisClient">创建redis</Button>

    </div>
</template>

<script>
    // @ is an alias to /src
    import redis from '../api/redis';
    let {redisFactory,RedisClientConfig} = redis;
    export default {
        name: 'home',
        components: {},
        data(){
            return {};
        },
        computed:{
            redisHosts(){
                // redisFactory.
                return redisFactory.getHosts();
            }
        },
        methods: {
            createRedisClient(){
                let redisClientConfig = new RedisClientConfig();
                redisClientConfig.name="dockerRedis";
                redisClientConfig =  redisFactory.createHost(redisClientConfig);
                console.log(redisClientConfig);
            }
        }
    }
</script>
