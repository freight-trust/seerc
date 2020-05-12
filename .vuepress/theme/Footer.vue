<template>
    <b-navbar v-if="!embedded" toggleable="md" fixed="bottom" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/"><b-img :src="$withBase('/assets/images/base-token.png')" height="24" /> WatchToken</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/create.html">$EDI Token</b-nav-item>
                <b-nav-item target="_blank" href="https://etherscan.io/address/0x79c5a1ae586322a07bfb60be36e1b31ce8c84a1e">EtherScan</b-nav-item>
                <b-nav-item target="_blank" href="https://freight-chain.github.io/omnibus">Documentation & Whitepapers</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item disabled>&copy; 2019</b-nav-item>
                <b-nav-item href="https://github.com/vittominacori/watch-token" target="_blank">Source code</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
  import browser from '../mixins/browser';

  export default {
    name: 'Footer',
    mixins: [
      browser,
    ],
  };
</script>
