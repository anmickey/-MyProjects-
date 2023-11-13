<script lang="ts" setup>
  import { P } from '@/components/index';

  import { PropType, defineProps, defineEmits, ref } from 'vue';
  import { SelectConf } from '../input.conf';

  const input = ref('');

  const props = defineProps({
    lableText: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: true },
    hidden: { type: Boolean, default: false },
    value: { type: String, require: true },
    valid: { type: Boolean, required: true },
    required: { type: Boolean, default: true },
    array: {
      type: Array as PropType<SelectConf[] | []>,
      default: () => {
        return [];
      },
    },
  });

  const emit = defineEmits(['update:select']);

  function clickHandler(item: SelectConf) {
    if (item.id != '0') {
      input.value = item.firstName + (item.lastName ? ' ' + item.lastName : '');
      emit('update:select', item.id);
    }
  }

  function initialState() {
    const arr = props.array.filter(item => item.id == props.value);
    return arr[0].firstName + (arr[0].lastName ? ' ' + arr[0].lastName : '');
  }
</script>

<template>
  <div class="select" :class="{ invalid: valid, hidden }">
    <div class="select__text">
      <P size="m" class="c__g_l" :class="{ hidden: hidden || !required }"><span class="c__b_l">*</span></P>
      <P size="m" class="c__g_l">{{ lableText }}</P>
    </div>

    <div class="dd">
      <input :value="value == '' ? placeholder : initialState()" :class="{ initial: value == '' }" type="text" />
      <p class="select__arrow"><i class="material-icons c__g_l">arrow_drop_down</i></p>
      <ul class="select__dd dd__menu bg__w">
        <template v-for="item of array" :key="item.id">
          <li @click="clickHandler(item)" :class="[{ check: value == item.id }, item.id == '0' ? 'default check' : '']">
            <P size="m" class="c__g_l">{{ item.firstName }} {{ item.lastName }}</P>
          </li>
          <li class="dd__linear"></li
        ></template>
      </ul>
    </div>

    <select :value="value == '' ? '0' : value" :name="name" />
  </div>
</template>

<style lang="scss">
  @import './style/select.scss';
</style>
