<template>
    <div ref="lazy_element" id="lazy_element" :class="hidden ? translate ? 'hidden translate_hidden' : 'hidden' : translate ? 'visible translate_visible' : 'visible'">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Lazy',

    props: {
        translate: Boolean
    },

    data: () => {
        return {
            hidden: true
        }
    },

    mounted() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        let target = this.$refs.lazy_element;

        let observer = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                if (this.hidden) {
                    this.hidden = false;
                    this.$emit('reveal');
                }
            }
        }, options);

        setInterval(() => observer.observe(target), 100);
    }
}
</script>

<style lang="scss" scoped>

    .hidden { opacity: 0; }
    .visible { opacity: 1; }

    .translate_hidden { transform: translateX(-100px); }
    .translate_visible { transform: translateX(0); }

    #lazy_element {
        transition: opacity 0.8s ease-in-out, transform 0.5s ease-in-out;
    }
</style>
