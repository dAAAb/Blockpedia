---
description: 以太殭屍（CryptoZombies）是最受歡迎的免費 Solidity 教學平台，透過養殭屍遊戲學習智能合約開發。
---

# 以太殭屍

### 想學區塊鏈開發，但不知道從哪開始？CryptoZombies 讓你一邊寫程式、一邊養殭屍，從零開始學會 Solidity。這是入門智能合約開發最有趣的方式。

---

## 什麼是 CryptoZombies？

| 項目 | 說明 |
|------|------|
| 英文名 | CryptoZombies |
| 類型 | 互動式程式教學 |
| 語言 | Solidity（以太坊）|
| 費用 | 完全免費 |
| 開發者 | Loom Network |

{% embed url="https://cryptozombies.io/" %}

---

## 課程內容

### 學習路徑

```
CryptoZombies 課程結構：

第一季：Solidity 基礎
├── 第 1 課：建立殭屍工廠
├── 第 2 課：殭屍攻擊人類
├── 第 3 課：進階 Solidity
├── 第 4 課：殭屍戰鬥系統
├── 第 5 課：ERC721 與 NFT
└── 第 6 課：Web3.js 前端

進階課程：
├── Chainlink 預言機
├── 測試智能合約
└── 其他進階主題

學習成果：
- 完整的 Solidity 基礎
- 能寫出簡單的智能合約
- 理解 DApp 開發流程
```

### 課程特色

| 特色 | 說明 |
|------|------|
| 互動式 | 邊學邊寫程式 |
| 遊戲化 | 養殭屍的樂趣 |
| 免費 | 完全不用付費 |
| 中文 | 有繁體中文版 |
| 即時反饋 | 馬上看到結果 |

{% hint style="info" %}
**為什麼是殭屍？**

殭屍是很好的程式教學主題——有狀態（HP、等級）、有行為（攻擊、進化）、有關係（軍團、戰鬥）。這些概念剛好對應到智能合約的核心概念。
{% endhint %}

---

## 學習內容

### Solidity 基礎

```solidity
// CryptoZombies 教的第一個合約

pragma solidity ^0.8.0;

contract ZombieFactory {
    // 狀態變數
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    // 結構體
    struct Zombie {
        string name;
        uint dna;
    }

    // 陣列
    Zombie[] public zombies;

    // 函數
    function createZombie(string memory _name, uint _dna) public {
        zombies.push(Zombie(_name, _dna));
    }
}

// 課程會一步步解釋每個概念
```

### 涵蓋主題

| 主題 | 內容 |
|------|------|
| 資料類型 | uint, string, struct |
| 函數 | public, private, view |
| 事件 | event, emit |
| 繼承 | inheritance |
| 介面 | interface |
| 存取控制 | modifier, require |
| ERC 標準 | ERC20, ERC721 |
| 前端整合 | Web3.js |

---

## 為什麼值得學？

### 適合對象

| 對象 | 原因 |
|------|------|
| 程式新手 | 從零開始，循序漸進 |
| 前端工程師 | 想了解區塊鏈開發 |
| 後端工程師 | 學習新的開發範式 |
| 區塊鏈愛好者 | 不只投資，還要了解技術 |

### 學習建議

```
如何最大化學習效果：

1. 不要只是點「下一步」
   - 真正理解每行程式碼
   - 試著修改看看會怎樣

2. 完成每個挑戰
   - 不要跳過練習
   - 錯了就重來

3. 做筆記
   - 記下重要概念
   - 回顧時很有用

4. 實際應用
   - 學完後自己寫專案
   - 部署到測試網試試

5. 加入社群
   - 討論問題
   - 互相學習
```

{% hint style="info" %}
**學習時間**

認真學的話，大約 10-20 小時可以完成第一季。不用急，重要的是真的理解，而不是快速完成。
{% endhint %}

---

## 完成後下一步

### 進階資源

| 資源 | 說明 |
|------|------|
| Solidity 官方文件 | 深入語言細節 |
| OpenZeppelin | 安全的合約庫 |
| Hardhat/Foundry | 專業開發工具 |
| Ethernaut | 安全挑戰遊戲 |
| Damn Vulnerable DeFi | DeFi 安全練習 |

### 職業方向

| 方向 | 說明 |
|------|------|
| 智能合約開發 | 專寫區塊鏈程式 |
| DApp 全端開發 | 前後端都會 |
| 安全審計 | 專找程式漏洞 |
| 區塊鏈顧問 | 幫企業導入區塊鏈 |

---

## 延伸閱讀

- [LOOMX](README.md) — CryptoZombies 開發者
- [智能合約](../../smart-contract/README.md) — 智能合約介紹
- [以太坊](../../bang/ethereum.md) — 智能合約平台

---

#### 參考資料

- [CryptoZombies](https://cryptozombies.io/)
- [Solidity 官方文件](https://docs.soliditylang.org/)

