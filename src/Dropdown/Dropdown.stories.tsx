import React, { useState } from 'react';
import OMDropdown from './Dropdown';
import { IEntryItem, IMenuItem } from './Dropdown.types';

export default {
  title: 'om-dropdown',
};

const emojis = [
  '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹',
];

function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

const menu: IEntryItem[] = [
  {
    label: 'aaa',
    value: 'aaa',
    key: 'aaa',
    menuTitle: '新增成员',
    filterKey: 'value',
    placeholder: '搜索成员…',
    prefixIcon: `😼`,
    children: [
      {
        label: 'aaa-1aaaaaaaaaaaa-1aaaaaaaaaaaa-1aaaaaaaaaaaa-1aaaaaaaaaaaa-1aaaaaaaaa',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
      {
        label: 'aaa-3',
        value: 'aaa-3',
        key: 'aaa-3',
      },
      {
        label: 'bbb-3',
        value: 'bbb-3',
        key: 'bbb-3',
      },
      {
        label: 'aaa-4',
        value: 'aaa-4',
        key: 'aaa-4',
      },
      {
        label: 'bbb-4',
        value: 'bbb-4',
        key: 'bbb-4',
      },
    ],
  },
  {
    label: 'bbb',
    value: 'bbb',
    key: 'bbb',
    menuTitle: '新增组',
    filterKey: 'value',
    placeholder: '搜索组…',
    prefixIcon: `🐶`,
    children: [
      {
        label: 'aaa-1',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
      {
        label: 'aaa-3',
        value: 'aaa-3',
        key: 'aaa-3',
      },
      {
        label: 'bbb-3',
        value: 'bbb-3',
        key: 'bbb-3',
      },
      {
        label: 'aaa-4',
        value: 'aaa-4',
        key: 'aaa-4',
      },
      {
        label: 'bbb-4',
        value: 'bbb-4',
        key: 'bbb-4',
      },
    ],
  },
  {
    label: 'ccc',
    value: 'ccc',
    key: 'ccc',
    menuTitle: '新增成员 c',
    filterKey: 'value',
    placeholder: '搜索成员…',
    prefixIcon: `😼`,
    children: [
      {
        label: 'aaa-1',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
      {
        label: 'aaa-3',
        value: 'aaa-3',
        key: 'aaa-3',
      },
      {
        label: 'bbb-3',
        value: 'bbb-3',
        key: 'bbb-3',
      },
      {
        label: 'aaa-4',
        value: 'aaa-4',
        key: 'aaa-4',
      },
      {
        label: 'bbb-4',
        value: 'bbb-4',
        key: 'bbb-4',
      },
    ],
  },
  {
    label: 'ddd',
    value: 'ddd',
    key: 'ddd',
    menuTitle: '新增组 d',
    filterKey: 'value',
    placeholder: '搜索组…',
    prefixIcon: `🐶`,
    children: [
      {
        label: 'aaa-1',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
      {
        label: 'aaa-3',
        value: 'aaa-3',
        key: 'aaa-3',
      },
      {
        label: 'bbb-3',
        value: 'bbb-3',
        key: 'bbb-3',
      },
      {
        label: 'aaa-4',
        value: 'aaa-4',
        key: 'aaa-4',
      },
      {
        label: 'bbb-4',
        value: 'bbb-4',
        key: 'bbb-4',
      },
    ],
  },
  {
    label: 'eee',
    value: 'eee',
    key: 'eee',
    menuTitle: '新增成员 e',
    filterKey: 'value',
    placeholder: '搜索成员…',
    prefixIcon: `😼`,
    children: [
      {
        label: 'aaa-1',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
      {
        label: 'aaa-3',
        value: 'aaa-3',
        key: 'aaa-3',
      },
      {
        label: 'bbb-3',
        value: 'bbb-3',
        key: 'bbb-3',
      },
      {
        label: 'aaa-4',
        value: 'aaa-4',
        key: 'aaa-4',
      },
      {
        label: 'bbb-4',
        value: 'bbb-4',
        key: 'bbb-4',
      },
    ],
  },
  {
    label: 'fff',
    value: 'fff',
    key: 'fff',
    menuTitle: '新增组 f',
    filterKey: 'value',
    placeholder: '搜索组…',
    prefixIcon: `🐶`,
    children: [
      {
        label: 'aaa-1',
        value: 'aaa-1',
        key: 'aaa-1',
      },
      {
        label: 'bbb-1',
        value: 'bbb-1',
        key: 'bbb-1',
      },
      {
        label: 'aaa-2',
        value: 'aaa-2',
        key: 'aaa-2',
      },
      {
        label: 'bbb-2',
        value: 'bbb-2',
        key: 'bbb-2',
      },
      {
        label: 'aaa-3',
        value: 'aaa-3',
        key: 'aaa-3',
      },
      {
        label: 'bbb-3',
        value: 'bbb-3',
        key: 'bbb-3',
      },
      {
        label: 'aaa-4',
        value: 'aaa-4',
        key: 'aaa-4',
      },
      {
        label: 'bbb-4',
        value: 'bbb-4',
        key: 'bbb-4',
      },
    ],
  },
];

const initValue: IMenuItem[] = [
  {
    label: 'aaa-1',
    value: 'aaa-1',
    key: 'aaa-1',
  },
];

const getItemIcon = () => {
  return <div>{randomEmoji()}</div>;
};

export const Controlled = () => {
  const [value, setValue] = useState<IMenuItem[]>(initValue);

  const onValueChange = items => {
    setValue(items);
  };

  return <>
    <OMDropdown
      menu={menu}
      checkIcon={'√'}
      value={value}
      onValueChange={onValueChange}
      getItemIcon={getItemIcon}
      expandIcon={'>>'}
      backIcon={'<<'}
      searchIcon={'🔍'}
    >
      selected: {value.map(i => i.value).join(', ')}
    </OMDropdown>
  </>;
};

export const Uncontrolled = () => {
  const [value, setValue] = useState(initValue);

  const onValueChange = items => {
    setValue(items);
  };

  return <OMDropdown menu={menu} checkIcon={'√'} onValueChange={onValueChange} getItemIcon={getItemIcon}>
    current selected: {value.map(i => i.value).join(', ')}
  </OMDropdown>;
};
