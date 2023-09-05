<script setup></script>

<template>
    <main>
        <section class="commands">
            <h2 style="text-align: center">Voice Commands</h2>
            <h5 style="text-align: center">Make sure you speak slowly and clearly!</h5>
            <div class="commands-list">
                <hr />
                <div class="commands-info">
                    <h4>stop recording</h4>
                    <h5>Stop voice recognition.</h5>
                </div>
                <div class="commands-info">
                    <h4>add product / ad product / open product form</h4>
                    <h5>Open the Add Product Form Popup.</h5>
                </div>
                <div class="commands-info">
                    <h4>close add product / close ad product / close product form</h4>
                    <h5>Close the Add Product Form Popup.</h5>
                </div>
                <div class="commands-info">
                    <h4>edit product / open edit product form</h4>
                    <h5>Open the Edit Product Form Popup.</h5>
                </div>
                <div class="commands-info">
                    <h4>close edit product / close edit product form</h4>
                    <h5>Close the Edit Product Form Popup.</h5>
                </div>
                <div class="commands-info">
                    <h4>delete product / open delete product form</h4>
                    <h5>Open the Edit Product Form Popup.</h5>
                </div>
                <div class="commands-info">
                    <h4>close delete product / close delete product form</h4>
                    <h5>Close the Edit Product Form Popup.</h5>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.commands {
  margin: 10px;
  margin-top: 10rem;
}

.commands-list{
    display: flex;
    flex-direction: column;
    margin-top: 3.5rem;
}

.commands-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.commands-info:last-child{
    margin-bottom: 0;
}

.commands-info h4, .commands-info h5 {
    width: 50%;
}

hr {
  border: 0;
  border-top: 2px solid rgb(149, 149, 149);
}
</style>