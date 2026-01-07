---
description: 想像你要在以太坊上建一個應用：
---

# Solidity
> **最後更新：2026 年 1 月**


## Solidity 是專門用來撰寫以太坊智能合約的程式語言。如果智能合約是區塊鏈上的「自動販賣機」，那 Solidity 就是製造這台販賣機的「藍圖語言」——它決定販賣機怎麼收錢、怎麼出貨、怎麼找零。

想像你要在以太坊上建一個應用：

- 一個可以自動分潤的創作者平台
- 一個不需要銀行的借貸系統
- 一個數位收藏品的交易市場

你用什麼來寫？

**答案是 Solidity。**

它是以太坊生態系最主流的智能合約語言，超過 90% 的 DeFi 協議和 NFT 項目都用它開發。

### Solidity 的誕生

2014 年，以太坊團隊面臨一個問題：

> 「我們創造了一個可以執行程式的區塊鏈，但⋯⋯要用什麼語言寫程式？」

幾個選項被考慮過：

| 選項 | 問題 |
|------|------|
| 使用現有語言（如 Python）| 不適合區塊鏈的特殊需求 |
| 使用比特幣腳本 | 功能太有限 |
| 完全新創語言 | 開發者學習成本高 |

最後，Gavin Wood（以太坊共同創辦人）設計了 Solidity。

**設計原則**：語法要像 JavaScript，讓網頁開發者容易上手。

### 為什麼叫 Solidity？

「Solid」有「堅固」的意思。

這個名字暗示：

- 智能合約應該是「堅固」且可靠的
- 一旦部署就無法輕易修改
- 程式碼就是法律

{% hint style="info" %}
Solidity 的設計者 Gavin Wood 後來離開以太坊，創立了 Polkadot。他發明了另一個智能合約語言叫 Ink!。但 Solidity 仍然是最主流的選擇。
{% endhint %}

### Solidity 長什麼樣？

一個最簡單的智能合約：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, Blockchain!";

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
```

**這段程式碼做了什麼？**

1. 宣告一個叫 `HelloWorld` 的合約
2. 有一個公開的變數 `message`
3. 有一個函數可以更改這個訊息

看起來很像 JavaScript 對吧？這是故意的。

### Solidity 的核心概念

#### 1. 合約（Contract）

合約是 Solidity 的基本單位，類似其他語言的「類別（Class）」。

```solidity
contract MyToken {
    // 合約的內容
}
```

#### 2. 狀態變數（State Variables）

存在區塊鏈上的永久資料。

```solidity
contract Bank {
    mapping(address => uint256) public balances;  // 每個地址的餘額
    uint256 public totalDeposits;                  // 總存款
}
```

{% hint style="warning" %}
狀態變數的每次修改都要花 Gas 費。這是 Solidity 和傳統程式語言最大的不同——儲存資料是要花錢的！
{% endhint %}

#### 3. 函數（Functions）

合約的「動作」。

```solidity
function deposit() public payable {
    balances[msg.sender] += msg.value;
    totalDeposits += msg.value;
}

function withdraw(uint256 amount) public {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    balances[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
}
```

#### 4. 修飾符（Modifiers）

控制誰可以執行函數。

```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner");
    _;
}

function emergencyWithdraw() public onlyOwner {
    // 只有 owner 能執行
}
```

#### 5. 事件（Events）

通知外部世界「發生了什麼事」。

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);

function transfer(address to, uint256 amount) public {
    // ... 轉帳邏輯 ...
    emit Transfer(msg.sender, to, amount);
}
```

### Solidity 特有的概念

這些是你在其他程式語言看不到的：

| 概念 | 說明 |
|------|------|
| `msg.sender` | 呼叫合約的人的地址 |
| `msg.value` | 這次交易附帶多少 ETH |
| `block.timestamp` | 當前區塊的時間戳 |
| `payable` | 標記函數可以接收 ETH |
| `require` | 條件不滿足就回滾交易 |
| `revert` | 主動回滾交易 |

### Gas 與優化

在 Solidity 裡，**效率 = 省錢**。

每一行程式碼的執行都要消耗 Gas。不同操作的 Gas 成本：

| 操作 | 大約 Gas 消耗 |
|------|--------------|
| 加法 | 3 |
| 讀取狀態變數 | 200 |
| 寫入狀態變數 | 5,000-20,000 |
| 部署合約 | 數十萬到數百萬 |

**常見優化技巧**：

```solidity
// ❌ 不好：迴圈內多次讀取狀態變數
for (uint i = 0; i < users.length; i++) {
    // users.length 每次都要從區塊鏈讀取
}

// ✅ 好：先存到記憶體
uint256 len = users.length;
for (uint i = 0; i < len; i++) {
    // len 在記憶體中，讀取便宜
}
```

### Solidity 版本

Solidity 持續更新，版本很重要：

| 版本 | 重要變化 |
|------|----------|
| 0.4.x | 早期版本，很多安全問題 |
| 0.5.x | 增加安全檢查 |
| 0.6.x | try/catch、虛擬函數 |
| 0.7.x | 移除許多過時功能 |
| 0.8.x | 內建溢位保護（重大改進）|

```solidity
pragma solidity ^0.8.0;  // 使用 0.8.0 以上版本
```

{% hint style="danger" %}
0.8.0 之前的版本沒有內建整數溢位保護。這導致了很多安全漏洞，包括著名的 DAO 攻擊。現在寫合約，務必使用 0.8.0 以上版本。
{% endhint %}

### Solidity 的安全陷阱

#### 1. 重入攻擊（Reentrancy）

最著名的漏洞，The DAO 就是這樣被駭的。

```solidity
// ❌ 危險的寫法
function withdraw() public {
    uint256 amount = balances[msg.sender];
    payable(msg.sender).call{value: amount}("");  // 攻擊者可以在這裡重入
    balances[msg.sender] = 0;  // 餘額在轉帳後才歸零
}

// ✅ 安全的寫法（Checks-Effects-Interactions 模式）
function withdraw() public {
    uint256 amount = balances[msg.sender];
    balances[msg.sender] = 0;  // 先歸零
    payable(msg.sender).call{value: amount}("");  // 再轉帳
}
```

#### 2. 整數溢位（0.8.0 前）

```solidity
// 在 0.8.0 之前
uint8 a = 255;
a = a + 1;  // a 變成 0！不是 256
```

#### 3. 存取控制

```solidity
// ❌ 忘記加權限控制
function setOwner(address newOwner) public {
    owner = newOwner;  // 任何人都能改 owner！
}

// ✅ 加上權限
function setOwner(address newOwner) public onlyOwner {
    owner = newOwner;
}
```

### 開發工具生態系

| 工具 | 用途 |
|------|------|
| **Remix** | 瀏覽器 IDE，適合新手 |
| **Hardhat** | 本地開發框架 |
| **Foundry** | Rust 寫的高效框架 |
| **OpenZeppelin** | 安全的合約範本庫 |
| **Slither** | 靜態分析工具 |

### 學習 Solidity 的路徑

```
1. 學習基礎語法（1-2 週）
   └── Remix IDE + CryptoZombies 教程

2. 理解 ERC 標準（1 週）
   └── ERC-20（代幣）、ERC-721（NFT）

3. 學習安全模式（2 週）
   └── OpenZeppelin 合約、常見漏洞

4. 實作專案（持續）
   └── 自己的代幣、NFT、DeFi 小專案

5. 學習測試和部署（1 週）
   └── Hardhat 或 Foundry
```

### Solidity vs 其他智能合約語言

| 語言 | 區塊鏈 | 特點 |
|------|--------|------|
| **Solidity** | Ethereum、BSC、Polygon | 最主流，資源最多 |
| **Vyper** | Ethereum | 更安全但功能較少 |
| **Rust** | Solana、Near | 性能高但學習曲線陡 |
| **Move** | Aptos、Sui | 專注資產安全 |
| **Ink!** | Polkadot | Rust-based |

### 為什麼 Solidity 這麼重要？

數字說話：

| 數據 | 說明 |
|------|------|
| TVL 佔比 | 以太坊及 EVM 鏈佔 DeFi 總鎖倉量 70%+ |
| 工作機會 | 區塊鏈開發職缺 80%+ 要求 Solidity |
| 教學資源 | 最豐富的文件和教程 |
| 合約數量 | 數百萬個已部署合約 |

{% hint style="success" %}
Solidity 是進入區塊鏈開發的最佳入口。不是因為它是最好的語言，而是因為它有最大的生態系、最多的工作機會、最豐富的學習資源。學會 Solidity，你就能參與 DeFi、NFT、DAO 等最熱門的區塊鏈應用開發。
{% endhint %}

---

#### 相關條目

- [智能合約](README.md)
- [以太坊](../ethereum/README.md)
- [DeFi](../defi/README.md)
- [ERC-20](../token/erc20.md)

#### 學習資源

- [Solidity 官方文件](https://docs.soliditylang.org/)
- [CryptoZombies](https://cryptozombies.io/)
- [OpenZeppelin Contracts](https://www.openzeppelin.com/contracts)
