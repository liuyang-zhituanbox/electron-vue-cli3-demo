<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="6"><h1>Hello,World</h1></Col>

        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="2">
                <Button type="text" shape="circle" icon="md-arrow-forward" to="/home"></Button>
            </Col>
        </Row>
    </div>
</template>

<script>
    /**
     * 欢迎页面
     */
    export default {
        name: "hello"
    }
</script>

<style scoped>

</style>
