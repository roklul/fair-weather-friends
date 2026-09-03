import './globals.css';

export const metadata = {
  title: '酒肉朋友 | 肉品與海鮮部位選購 × 料理佐餐指南',
  description: '全台獨創互動式牛肉、豬肉與魚類海鮮部位解剖圖鑑，結合「你想怎麼吃？」選肉決策助手與科學侍酒佐餐指南。',
  keywords: '牛肉部位, 豬肉部位, 魚肉部位, 牛排煎法, 餐酒搭配, 葡萄酒搭餐, 虱目魚, 午仔魚, 肋眼, 菲力, 五花肉, 松阪豬',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥩</text></svg>",
  },
  openGraph: {
    title: '酒肉朋友 | 肉品與海鮮部位選購 × 料理佐餐指南',
    description: '從今天想吃的口感與做法，找到適合的肉品與海鮮、最值得買的部位，以及最不容易出錯的搭酒。',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&family=Noto+Serif+TC:wght@400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-parchment-100 text-charcoal font-sans antialiased selection:bg-beef-burgundy selection:text-white">
        {children}
      </body>
    </html>
  );
}
