export const CASE_STUDIES = [
  {
    slug: 'rag-scada-integration',
    title: '讓 AI 診斷有憑有據：把 RAG 接進工業異常偵測系統',
    summary:
      'IIoT SCADA 平台的異常偵測原本只丟一個分數給現場人員自己猜，把設備手冊變成可查詢的知識庫後，異常發生時能自動組出「有憑有據」的診斷提示詞。',
    tags: ['RAG', 'SCADA', 'Isolation Forest', 'Qdrant', 'Ollama'],
    paragraphs: [
      '我在 IIoT SCADA 平台上做的異常偵測，一開始只有數值判斷——Isolation Forest 抓到異常分數 < 0.05，前端就跳出一則警示，但這則警示不會告訴你「為什麼異常」、「該怎麼處理」，只會丟一個分數給現場人員自己猜。我認為這個空缺正是 RAG 該補上的地方：把設備維護手冊變成系統能查詢的知識庫，異常發生時自動去撈跟這個異常最相關的段落，組進診斷提示詞，讓生成模型的回答有憑有據，不是憑空掰。',
      '完整的流程是：資料源協調器每秒進一筆感測數值 → Isolation Forest 判定異常 → 冷卻節流（60 秒內不重複觸發，避免異常持續發生時洗版式地狂打模型 API）→ 診斷協調器平行做兩件事：查 TimescaleDB 抓最近 5 分鐘的趨勢統計、把當下異常數值轉成查詢向量去 Qdrant 撈最相關的手冊片段（依 device_id 篩選，也尊重使用者手動停用的文件）→ 趨勢 + 手冊內容組成提示詞 → 送進本機 qwen3:14b 生成「原因 + 處置」兩行結論 → 透過 WebSocket 廣播回前端。整條路徑資料完全不出區網，符合我一開始設定「機敏的產線資料不上雲」的原則。',
      '驗證這條鏈的過程也值得一提：我刻意上傳兩份手冊，測試系統能不能正確分辨「哪份文件跟哪個異常有關」——透過前端的文件啟用開關，把其中一份手冊停用後重跑異常診斷，確認撈回來的段落全部落回還啟用的那份，即使語意上不是完全精準對題（矮子裡拔將軍找最接近的內容），這正是預期中的行為。這證明的不只是「RAG 接得起來」，而是「檢索邏輯真的照設計運作，不是巧合抓對」。',
    ],
  },
  {
    slug: 'honest-negative-finetune',
    title: '誠實面對一次「沒有用」的微調',
    summary:
      '完整跑完一輪 LoRA 微調，五項評估指標四項變差、一項打平。沒有藏起來，而是拆解出三個具體原因，並判斷不值得繼續砸資源迭代。',
    tags: ['LoRA', 'Unsloth', 'Fine-tuning', '評估框架'],
    paragraphs: [
      '我在 RAG 平台上跑完一輪完整的 LoRA 微調（Unsloth、r=16、7 個 target modules、3 epochs，base 為 qwen3:14b），合併轉 GGUF、匯入 Ollama，產出 qwen3-money:14b，滿心期待跑評估腳本能看到分數提升。結果是五項指標裡四項變差、一項打平——BLEU、ROUGE-L、source_hit_rate 全部下降，連 perplexity 都不降反升。',
      '我沒有把這個結果藏起來或輕描淡寫帶過，而是回頭認真拆解可能的原因。訓練資料只有 37 筆，是我刻意挑選跟評估測試集不同章節的內容（避免資料洩漏、確保評估的公正性），這個決定本身沒錯，但代價是訓練資料涵蓋的知識點跟測試集要考的知識點幾乎沒有重疊，等於模型學到的東西跟被考的東西是兩件事；37 筆對 LoRA 微調來說訊號太弱，不足以真正改變模型行為；訓練資料是簡短的問答格式，跟 qwen3 原本自然語言的講話風格有落差，微調反而可能讓輸出風格變得不上不下。',
      '判斷清楚原因之後，我決定不繼續砸資源迭代重訓——增加資料量或調整訓練資料的章節重疊，理論上都能改善，但那已經超出「驗證微調有沒有用」這個問題本身要回答的範圍。這次實驗真正的價值不是「微調成功了」，而是我能具體說出「為什麼沒成功」，並且知道下一步該往哪個方向調整，這是面試裡比一句「有做過微調」更有說服力的答案。',
    ],
  },
  {
    slug: 'api-key-incident-response',
    title: 'Key 外洩後，不是換一把新的就結束',
    summary:
      '雲端部署過程中連續三次不小心洩漏 API Key 明文，根本原因是 AWS CLI 指令的輸出設計。從「換 Key」升級到「換掉會外洩的存放機制」，搬進 Secrets Manager 並收斂 IAM 權限。',
    tags: ['AWS', 'Secrets Manager', 'IAM', '資安事件'],
    paragraphs: [
      '雲端部署過程中，我連續三次不小心把 API Key 的明文洩漏出去——根本原因不是我不小心複製貼上，而是 AWS Lambda 的環境變數在設計上就有這個坑：create-function、get-function、update-function-configuration 這類 CLI 指令的回應，會把 Lambda 目前設定的所有環境變數（包含明文 Key）整個印出來，只要我為了排查問題貼出指令的完整輸出，Key 就跟著洩漏了，而且這個模式會不斷重複，因為排查問題本來就需要常常執行這些指令確認設定。',
      '換一把新 Key 只能解決「這一次」，解決不了「下一次還會發生」，所以我把四把 Key（Gemini、DeepInfra、Qdrant 兩把）全部搬進 AWS Secrets Manager，建立 rag-platform/api-keys、rag-platform/processor-keys 兩個 Secret，各自對應 api Lambda 跟 processor Lambda 實際需要用到的範圍（processor Lambda 不需要 Gemini Key，就不放進它讀得到的 Secret 裡）。Lambda 環境變數從此只存一個「去哪裡拿」的位址，不再存值本身，往後不管我再怎麼執行 get-function 之類的指令，印出來的都只是 ARN，不是明文。搬遷同時我也把 IAM 角色從原本圖方便用的 *FullAccess，拆成 rag-platform-api-role、rag-platform-processor-role 兩個各自最小權限的角色，不讓任何一個 Lambda 有超出它本身職責的存取範圍。',
      '這件事讓我確認一個原則：資安問題如果只從「事件」層級處理（換 Key），下一次還是會用同樣的方式再犯；要從「機制」層級處理（換掉會外洩的存放方式、把權限收斂到最小），才是真正把洞補起來，不是止血而已。',
    ],
  },
]
