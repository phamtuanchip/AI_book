# AI_book — Kế hoạch viết sách

## 1. Mục tiêu cuốn sách

Một cuốn sách nhập môn AI dành cho người mới, đi nhanh qua nền tảng lý thuyết rồi dồn trọng tâm vào
kỹ năng thực chiến: prompting, dùng AI hỗ trợ lập trình, xây dựng và vận hành AI agents, và áp dụng AI
xuyên suốt vòng đời phát triển phần mềm (SDLC). Đọc xong, người đọc phải **làm được** chứ không chỉ
biết khái niệm.

Riêng phần AI SDLC (Phần IV), mục tiêu đặt cao hơn một bậc: người đọc không dừng lại ở việc **dùng**
công cụ AI (applyer), mà phải đủ khả năng **thiết kế, đánh giá và quản trị** một hệ thống AI SDLC agentic
cho cả team/tổ chức — tức là trở thành **AI SDLC Architect & Manager**: biết vẽ kiến trúc, chọn mô hình
triển khai agent phù hợp, đặt ra guardrail/bảo mật, và chịu trách nhiệm vận hành lâu dài.

## 2. Đối tượng độc giả

- Lập trình viên (mọi cấp độ) muốn dùng AI tăng tốc công việc hàng ngày.
- Sinh viên CNTT / người mới chuyển ngành sang lập trình.
- Team lead / kỹ sư muốn đưa AI vào quy trình phát triển của team.
- (Phần IV) Kỹ sư/lead hướng tới vai trò thiết kế & quản trị hệ thống AI SDLC cho tổ chức.

Giả định: người đọc biết lập trình cơ bản, không cần biết trước về ML/AI.

## 3. Cấu trúc tổng thể

Sách chia làm 4 phần, đi từ khái niệm nền tảng đến ứng dụng chuyên sâu:

- **Phần I — Nhập môn AI (gọn, nhanh):** đủ để hiểu bối cảnh, không sa đà vào toán/lý thuyết.
- **Phần II — Prompting & công cụ AI hỗ trợ lập trình:** phần trọng tâm, chiếm dung lượng lớn nhất.
- **Phần III — AI Agents & Agentic AI trong công việc:** mở rộng ra ngoài lập trình.
- **Phần IV — AI xuyên suốt SDLC:** kiến trúc, bảo mật, quản trị — đưa người đọc từ applyer lên architect/manager.
- **Phụ lục — Thư viện prompt template mẫu:** tra cứu nhanh theo từng phần.

## 4. Đề cương chi tiết

### Phần I — Nhập môn AI nhanh (3-4 chương)

1. **AI là gì, vì sao quan tâm lúc này** — lược sử ngắn, bước ngoặt LLM/ChatGPT, bối cảnh hiện tại.
2. **Mô hình ngôn ngữ lớn (LLM) hoạt động thế nào** — token, dự đoán từ tiếp theo, training/fine-tuning/RLHF
   ở mức trực giác (không đi sâu toán).
3. **Hệ sinh thái mô hình & nhà cung cấp** — so sánh nhanh các dòng model phổ biến (Claude, GPT, Gemini,
   Llama, model mã nguồn mở...), tiêu chí chọn model, context window, chi phí, giới hạn.
4. **Giới hạn và rủi ro cần biết** — hallucination, bias, dữ liệu lỗi thời, vấn đề bảo mật/riêng tư khi
   dùng AI trong công việc.

### Phần II — Prompting & công cụ AI hỗ trợ lập trình (trọng tâm, 6-8 chương)

5. **Nguyên lý prompting cơ bản** — vai trò (role), ngữ cảnh (context), ví dụ (few-shot), định dạng đầu ra,
   lặp lại và tinh chỉnh (iterate). *(kèm prompt template mẫu — xem Phụ lục A)*
6. **Kỹ thuật prompting nâng cao** — chain-of-thought, phân rã nhiệm vụ (task decomposition), self-critique,
   prompt template tái sử dụng. *(kèm prompt template mẫu — Phụ lục A)*
7. **Prompting cho code** — sinh code, giải thích code, refactor, sinh test, debug với AI. *(kèm prompt
   template mẫu — Phụ lục B)*
8. **Công cụ AI coding trong IDE** — GitHub Copilot, Cursor, Claude Code, JetBrains AI... cách chọn và
   phối hợp nhiều công cụ.
9. **Làm việc với Claude Code / CLI agent** — thiết lập, CLAUDE.md, custom skills/slash command, quy trình
   làm việc thực tế (đọc code, sửa bug, viết feature).
10. **Đánh giá chất lượng output AI** — code review AI-generated code, kiểm thử, tránh "vibe coding" thiếu
    kiểm soát.
11. **Case study thực hành** — 2-3 ví dụ end-to-end: từ prompt tới tính năng hoàn chỉnh.

### Phần III — Công nghiệp Agentic: AI Agents trong công việc (4-5 chương)

12. **AI agent là gì** — khác gì so với chatbot/prompt đơn lẻ; vòng lặp plan → act → observe; công cụ (tools),
    bộ nhớ (memory).
13. **Kiến trúc agent phổ biến** — single-agent vs multi-agent, orchestrator/sub-agent, RAG kết hợp agent.
    *(có sơ đồ kiến trúc)*
14. **Xây dựng agent đơn giản** — ví dụ thực hành dùng SDK (Claude Agent SDK/API) hoặc no-code/low-code tool.
    *(kèm prompt/system-prompt template mẫu — Phụ lục C)*
15. **Agent trong công việc phi lập trình** — tự động hoá quy trình, xử lý tài liệu, hỗ trợ vận hành, customer
    support, research assistant...
16. **Quản trị & rủi ro khi dùng agent** — quyền hạn (permissions), giám sát hành động, guardrail, chi phí vận
    hành, con người trong vòng lặp (human-in-the-loop).

### Phần IV — Áp dụng AI toàn diện vào SDLC: từ Applyer đến Architect & Manager (7-8 chương)

17. **Bức tranh SDLC với AI** — điểm chèn AI vào từng giai đoạn: lên ý tưởng, requirement, thiết kế, code,
    test, review, deploy, vận hành, bảo trì. *(sơ đồ tổng quan vòng đời SDLC có AI can thiệp)*
18. **AI trong planning & requirement** — sinh user story, phân tích yêu cầu, ước lượng. *(prompt template —
    Phụ lục D)*
19. **AI trong thiết kế & kiến trúc** — hỗ trợ thiết kế hệ thống, sinh tài liệu kỹ thuật, ADR.
20. **AI trong code, test, review, CI/CD** — pipeline có AI (code gen, test gen, review tự động, release note).
21. **AI trong vận hành & bảo trì** — giám sát, phân tích log/incident, đề xuất fix, cập nhật tài liệu tự động.
22. **Kiến trúc Agentic AI cho SDLC** — mô hình multi-agent theo pipeline (planner / coder / reviewer / tester /
    deploy agent), orchestrator, luồng dữ liệu giữa các agent, nơi con người can thiệp (human-in-the-loop
    gate). *(sơ đồ kiến trúc chi tiết — mermaid/SVG)*
23. **Bảo mật & bảo vệ hệ thống cho Agentic AI SDLC** — chương trọng tâm về an toàn, cập nhật theo bối cảnh
    mới nhất:
    - Prompt injection (trực tiếp & gián tiếp qua tài liệu/web/tool output)
    - Rò rỉ dữ liệu & bí mật (secrets, source code, dữ liệu khách hàng) qua agent/tool-calling
    - Least-privilege & sandbox cho agent (giới hạn quyền file/mạng/lệnh thực thi)
    - Rủi ro chuỗi cung ứng của tool/MCP server & plugin bên thứ ba
    - Memory/context poisoning, agent-to-agent trust exploitation trong hệ multi-agent
    - Audit trail, observability, logging hành vi agent để truy vết sự cố
    - Human-in-the-loop / approval gate cho hành động rủi ro cao (deploy, xoá dữ liệu, gọi API tiền/PII)
    - Tuân thủ & cư trú dữ liệu (compliance, data residency) khi dùng AI xử lý dữ liệu nội bộ
    - Mô hình zero-trust áp dụng cho hệ thống agentic
    *(kèm checklist bảo mật & sơ đồ luồng quyền hạn)*
24. **Xây dựng "AI-native team"** — thay đổi quy trình, văn hoá, kỹ năng cần có, đo lường hiệu quả.
25. **Từ Applyer đến Architect & Manager** — chương chốt của Phần IV: vai trò và trách nhiệm của một AI SDLC
    Architect/Manager, khung đánh giá kiến trúc (architecture review checklist), KPI đo hiệu quả & rủi ro,
    quy trình ra quyết định khi chọn/thay đổi kiến trúc agentic cho tổ chức.

### Kết

26. **Tổng kết & lộ trình tự học tiếp theo** — checklist, tài nguyên, xu hướng cần theo dõi.

### Phụ lục — Thư viện prompt template mẫu

Tập hợp các prompt/template có thể copy-dùng ngay, đặt cuối sách để tra cứu nhanh, mỗi mục gồm: mục đích,
template (có chỗ điền biến `{...}`), ví dụ điền sẵn, và lưu ý khi dùng.

- **Phụ lục A — Prompting cơ bản & nâng cao:** role+context+format, few-shot, chain-of-thought,
  task decomposition, self-critique/refine, prompt tái sử dụng theo biến.
- **Phụ lục B — Prompting cho code:** sinh code mới, giải thích code, refactor, sinh unit test, tìm & sửa
  bug, code review, viết commit message/PR description.
- **Phụ lục C — System prompt & prompt cho agent:** system prompt cho agent chuyên biệt (coder agent,
  reviewer agent, planner agent...), prompt định nghĩa tool, prompt giới hạn phạm vi hành động
  (guardrail prompt).
- **Phụ lục D — Prompt cho từng giai đoạn SDLC:** viết user story/requirement, viết ADR, threat-modeling
  prompt, security-review prompt, postmortem/incident-report prompt, release note prompt.

Ghi chú: các template này sẽ được viết chi tiết cùng lúc với nội dung chương tương ứng, không viết tách
rời trước để tránh lệch ngữ cảnh.

## 5. Phong cách & nguyên tắc viết

- Ưu tiên **ví dụ thực hành** và prompt mẫu hơn lý thuyết dài dòng.
- Mỗi chương phần II-IV nên có: mục tiêu ngắn → nội dung → ví dụ/case study → prompt template liên quan
  (nếu có) → bài tập/checklist.
- Ngôn ngữ đơn giản, đúng đối tượng người mới; thuật ngữ tiếng Anh giữ nguyên kèm giải thích lần đầu.
- Cập nhật ví dụ theo công cụ thực tế thời điểm viết, ghi chú rõ điều gì có thể lỗi thời nhanh (tên
  sản phẩm/model) để độc giả tự cập nhật — riêng chương bảo mật (23) cần ghi rõ mốc thời gian cập nhật
  vì bối cảnh đe doạ thay đổi nhanh.

## 6. Định dạng xuất bản & quy trình build

Quyết định: **viết nội dung dưới dạng HTML trước**, sơ đồ/kiến trúc vẽ trực tiếp trong từng file HTML
(SVG/mermaid inline), hoàn thiện toàn bộ nội dung rồi mới build sang PDF và EPUB ở bước sau (dùng công cụ
như Pandoc/Calibre từ nguồn HTML đã hoàn chỉnh). Không làm PDF/EPUB song song để tránh phải sửa 2-3 nơi
mỗi lần chỉnh nội dung.

Cấu trúc thư mục dự kiến:

```
chapters/        # mỗi chương 1 file .html, đặt tên theo số thứ tự: 01-ai-la-gi.html ...
templates/       # phụ lục prompt template (có thể tách file theo phụ lục A/B/C/D)
assets/          # ảnh, sơ đồ export (nếu không nhúng inline), css dùng chung
build/           # output sinh ra sau: pdf/, epub/ — không edit tay, luôn build lại từ chapters/
```

## 7. Việc cần làm tiếp theo

- [ ] Chốt tên sách và mục lục chi tiết (đến mức heading H3).
- [ ] Viết outline chi tiết từng chương (bullet nội dung + ví dụ dự kiến + template liên quan) trước khi
      viết full text.
- [ ] Dựng cấu trúc thư mục repo (`chapters/`, `templates/`, `assets/`, `build/`) và 1 file CSS/khung HTML
      dùng chung cho mọi chương (đảm bảo đồng bộ khi build PDF/EPUB sau).
- [ ] Viết chương mẫu (1 chương Phần I + 1 chương Phần II) để chốt văn phong và khung HTML trước khi viết
      toàn bộ.
- [ ] Thiết kế mẫu sơ đồ kiến trúc dùng chung (ký hiệu, màu sắc, style) cho các chương 13, 19, 22, 23 để
      nhất quán xuyên suốt sách.
- [ ] Lên danh sách rủi ro bảo mật/agentic cần cập nhật sát thời điểm viết chương 23 (không chốt cứng quá
      sớm vì bối cảnh thay đổi nhanh).
- [ ] Sau khi hoàn thành toàn bộ chapters/: chọn công cụ & quy trình build PDF/EPUB (Pandoc, Calibre, hoặc
      script riêng).
