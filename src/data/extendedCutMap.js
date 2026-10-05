// 確定性部位映射表 (Language-Agnostic Deterministic Primal Index Map)
export const BEEF_EXTENDED_CUT_MAP = {
  chuck: ['top-blade', 'flat-iron', 'top-blade', 'top-blade'],
  rib: ['ribeye', 'ribeye', 'short-rib', 'short-rib', 'ribeye'],
  loin: ['tenderloin', 'new-york-strip', 'new-york-strip', 'tenderloin', 'sirloin'],
  brisket: ['brisket-cut', 'brisket-cut', 'brisket-cut'],
  plate: ['short-plate-cut', 'short-plate-cut', 'flank-cut', 'short-plate-cut'],
  flank: ['flank-cut', 'flank-cut', 'flank-cut'],
  round: ['round-rump', 'round-rump', 'round-rump', 'round-rump'],
  shank: ['beef-shank', 'beef-shank', 'beef-shank', 'beef-shank']
};

export const getBeefCutId = (primalId, idx, name) => {
  if (BEEF_EXTENDED_CUT_MAP[primalId]?.[idx]) {
    return BEEF_EXTENDED_CUT_MAP[primalId][idx];
  }
  const n = (name || '').toLowerCase();
  if (n.includes('肋眼') || n.includes('ribeye') || n.includes('リブロース')) return 'ribeye';
  if (n.includes('老饕') || n.includes('spinalis') || n.includes('リブキャップ')) return 'ribeye';
  if (n.includes('菲力') || n.includes('tenderloin') || n.includes('ヒレ') || n.includes('フィレ')) return 'tenderloin';
  if (n.includes('紐約客') || n.includes('strip') || n.includes('サーロイン')) return 'new-york-strip';
  if (n.includes('沙朗') || n.includes('sirloin') || n.includes('ランプ')) return 'sirloin';
  if (n.includes('牛小排') || n.includes('short rib') || n.includes('ショートリブ')) return 'short-rib';
  if (n.includes('板腱') || n.includes('top blade') || n.includes('ミスジ')) return 'top-blade';
  if (n.includes('翼板') || n.includes('flat iron') || n.includes('ザブトン')) return 'flat-iron';
  if (n.includes('前胸') || n.includes('牛腩') || n.includes('brisket') || n.includes('ブリスケット')) return 'brisket-cut';
  if (n.includes('牛五花') || n.includes('short plate') || n.includes('牛バラ') || n.includes('カルビ')) return 'short-plate-cut';
  if (n.includes('腹脇') || n.includes('flank') || n.includes('フランク') || n.includes('ささみ')) return 'flank-cut';
  if (n.includes('腱') || n.includes('shank') || n.includes('スネ')) return 'beef-shank';
  if (n.includes('臀肉') || n.includes('round') || n.includes('モモ')) return 'round-rump';
  return null;
};

export const PORK_EXTENDED_CUT_MAP = {
  'pork-shoulder': ['pork-butt', 'pork-blade-shoulder', 'pork-butt'],
  'pork-loin': ['pork-loin-chop', 'pork-loin-chop', 'pork-loin-chop'],
  'pork-tenderloin': ['pork-tenderloin-cut', 'pork-tenderloin-cut', 'pork-tenderloin-cut'],
  'pork-belly': ['pork-belly-cut', 'pork-belly-cut', 'pork-belly-cut', 'pork-belly-cut'],
  'pork-ribs': ['pork-spare-ribs', 'pork-spare-ribs', 'pork-spare-ribs', 'pork-spare-ribs'],
  'pork-neck': ['matsusaka-pork', 'pork-jowl-cheek', 'matsusaka-pork'],
  'pork-front-leg': ['pork-hock-cut', 'pork-front-picnic', 'pork-hock-cut'],
  'pork-ham-trotter': ['pork-ham-leg', 'pork-ham-leg', 'pork-trotters-cut', 'pork-ham-leg']
};

export const getPorkCutId = (primalId, idx, name) => {
  if (PORK_EXTENDED_CUT_MAP[primalId]?.[idx]) {
    return PORK_EXTENDED_CUT_MAP[primalId][idx];
  }
  const n = (name || '').toLowerCase();
  if (n.includes('梅花') || n.includes('boston butt') || n.includes('肩ロース')) return 'pork-butt';
  if (n.includes('五花') || n.includes('三層') || n.includes('pork belly') || n.includes('三枚肉') || n.includes('豚バラ')) return 'pork-belly-cut';
  if (n.includes('松阪') || n.includes('雪花') || n.includes('matsusaka') || n.includes('トントロ')) return 'matsusaka-pork';
  if (n.includes('小里肌') || n.includes('腰內') || n.includes('tenderloin') || n.includes('ヒレ')) return 'pork-tenderloin-cut';
  if (n.includes('大里肌') || n.includes('豬排') || n.includes('pork chop') || n.includes('ロース') || n.includes('とんかつ')) return 'pork-loin-chop';
  if (n.includes('肋排') || n.includes('腩排') || n.includes('spare ribs') || n.includes('スペアリブ')) return 'pork-spare-ribs';
  if (n.includes('蹄膀') || n.includes('腿庫') || n.includes('hock') || n.includes('スネ')) return 'pork-hock-cut';
  if (n.includes('嘴邊肉') || n.includes('頰') || n.includes('jowl') || n.includes('カシラ')) return 'pork-jowl-cheek';
  if (n.includes('胛心') || n.includes('blade') || n.includes('ウデ')) return 'pork-blade-shoulder';
  if (n.includes('前腿') || n.includes('picnic')) return 'pork-front-picnic';
  if (n.includes('後腿') || n.includes('ham') || n.includes('モモ')) return 'pork-ham-leg';
  if (n.includes('豬蹄') || n.includes('豬腳') || n.includes('trotters') || n.includes('豚足')) return 'pork-trotters-cut';
  return null;
};

export const FISH_EXTENDED_CUT_MAP = {
  'fish-head': ['milkfish-loin-cut', 'grouper-fillet', 'salmon-fillet-cut', 'amberjack-collar'],
  'fish-collar': ['amberjack-collar', 'amberjack-collar', 'amberjack-collar', 'amberjack-collar'],
  'fish-dorsal': ['threadfin-steak', 'barramundi-fillet', 'pomfret-steak', 'spanish-mackerel'],
  'fish-belly': ['tuna-otoro-cut', 'milkfish-belly-cut', 'salmon-fillet-cut', 'amberjack-collar'],
  'fish-loin': ['milkfish-loin-cut', 'salmon-fillet-cut', 'mackerel-fillet', 'barramundi-fillet'],
  'fish-tail': ['spanish-mackerel', 'spanish-mackerel', 'threadfin-steak'],
  'fish-skin': ['milkfish-belly-cut', 'grouper-fillet', 'salmon-fillet-cut'],
  'fish-bone': ['barramundi-fillet', 'threadfin-steak', 'grouper-fillet'],
  'fish-offal': ['mullet-bottarga', 'milkfish-belly-cut', 'mullet-bottarga', 'mullet-bottarga']
};

export const getFishCutId = (primalId, idx, name) => {
  if (FISH_EXTENDED_CUT_MAP[primalId]?.[idx]) {
    return FISH_EXTENDED_CUT_MAP[primalId][idx];
  }
  const n = (name || '').toLowerCase();
  if (n.includes('菲力') || n.includes('loin') || n.includes('背肉') || n.includes('清肉') || n.includes('赤身') || n.includes('フィレ')) return 'salmon-fillet-cut';
  if (n.includes('大腹') || n.includes('otoro') || n.includes('腹') || n.includes('ハラス') || n.includes('トロ')) return 'tuna-otoro-cut';
  if (n.includes('下巴') || n.includes('collar') || n.includes('kama') || n.includes('カマ')) return 'amberjack-collar';
  if (n.includes('頭') || n.includes('head') || n.includes('兜')) return 'grouper-fillet';
  if (n.includes('尾') || n.includes('皮') || n.includes('tail') || n.includes('skin')) return 'spanish-mackerel';
  return null;
};
