<template>
    <div class="search-bar-container">
        <div class="search-bar">
            <input ref="searchInput" class="search-input" type="text" v-model="search" placeholder="Vnesite ime kraja"
                @click="updateShowDropdown(true)" @focus="updateShowDropdown(true)" @blur="updateShowDropdown(false)" @keyup.enter="emitSearch()"/>
            <div class="suffix-icon">
                <div class="icon"  @click="resetSearch()" v-if="search.length > 0">
                    <font-awesome-icon icon="xmark" />
                </div>
                <div class="icon"  @click="emitSearch()">
                    <font-awesome-icon icon="search" />
                </div>
            </div>
        </div>
        <div class="dropdown" v-if="showDropdown && options.length > 0" @mouseenter="preventBlur = true" @mouseleave="preventBlur = false">
            <div class="option" v-for="option in options" :key="option" @click="updateSearch(option)">{{ option }}</div>
        </div>
    </div>
</template>

<style scoped>
.search-bar-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 30vw;
}

.search-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s;
    border-radius: 5px;
}

.search-bar:focus-within,
.search-bar:hover {
    box-shadow: 0px 0px 0 2px #555555;
}

.search-input {
    border: none;
    padding: 0.8rem 0.8rem 0.6rem 0.8rem;
    width: 100%;
}

.search-input::placeholder {
    font-weight: 200;
}

.search-input:focus {
    outline: none;
}

.suffix-icon {
    position: absolute;
    right: 0;
    padding: 1rem;
    cursor: pointer;
    color: #ccc;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
}

.icon:hover {
    color: #555555;
}

.dropdown {
    position: absolute;
    top: 2.75rem;
    width: calc(100% - 0.4rem);
    z-index: 2;
    padding-top: 0.5rem;
    text-align: left;
    text-indent: 0.5rem;
    background-color: #181818;
    border-radius: 5px;
    padding: 0.2rem;
}

.option {
    list-style-type: none;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: all 0.2s;
    border-radius: 5px;
    color: #f0f0f0;
}

.option:hover {
    background-color: #eee;
}
</style>

<script>
export default {
    name: 'SearchBar',
    emits: [
        "search",
        "reset"
    ],
    data() {
        return {
            search: '',
            showDropdown: false,
            preventBlur: false
        }
    },
    methods: {
        emitSearch() {
            this.showDropdown = false;
            this.$emit('search', this.search);
        },
        resetSearch() {
            this.preventBlur = false;
            this.showDropdown = false;
            this.search = '';
            this.$emit('reset');
        },
        updateSearch(option) {
            this.search = option;
            this.showDropdown = false;
            this.emitSearch();
        },
        updateShowDropdown(value) {
            this.showDropdown = value || this.preventBlur;
        },
    },
    computed: {
        options() {
            return this.$store.state.searchHistory
        },
    },
}
</script>