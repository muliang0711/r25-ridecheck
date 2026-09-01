const sections = [
  {
    id: "before", title: "见面前与文件", subtitle: "先确认车与人都能合法过户", items: [
      { id: "owner", title: "车主身份与 ownership", summary: "Geran/VOC、IC 与卖家身份一致，可正常 tukar nama。", how: "核对车牌、chassis/engine number 与文件；确认没有未清贷款、blacklist 或 ownership 争议。不要先付清全款再等待过户。", critical: true },
      { id: "cold-video", title: "真实冷车视频", summary: "启动前拍仪表与 engine，手摸 engine 确认未预热。", how: "卖家会骑车到现场时，提前请他录当日第一次启动：镜头拍冷车仪表、排气、左右 engine，再一次启动。视频不能完全替代现场判断，但能补冷启动证据。" },
      { id: "records", title: "保养与维修记录", summary: "确认 service history、事故、大修、engine 是否开过。", how: "问最近一次 engine oil、coolant、brake fluid、spark plug、valve clearance、tyre 与 chain/sprocket 的日期/里程。解释不清不等于坏车，但要提高整备预算。" },
      { id: "keys", title: "钥匙、路税与保险资料", summary: "主/备用钥匙齐全，road tax 状态清楚。", how: "记录缺少的物品；约好成交与 JPJ 流程、付款节点和谁承担相关费用。" }
    ]
  },
  {
    id: "walkaround", title: "静态环车", subtitle: "不启动，先找事故、拆修与渗漏", items: [
      { id: "frame", title: "Frame 与重大事故痕迹", summary: "车架顺直，无焊接、明显变形或不对称。", how: "从正后方/正前方观察轮组与车身是否成一直线；看 steering stop、车架焊点、脚踏/把手/engine case 是否有同侧摔车痕迹。重大事故 frame 直接放弃。", critical: true },
      { id: "engine-bolts", title: "Engine 拆修痕迹", summary: "螺丝边缘、密封胶与接缝状态合理。", how: "看螺丝头是否有扳手咬痕、不同新旧/颜色、圆角；接缝是否有不均匀的新 sealant。拆过本身不是判死刑，卖家无法解释才是风险。" },
      { id: "oil-leak", title: "Engine oil 渗漏", summary: "接缝、drain bolt 与 engine 底部干爽。", how: "灰尘粘住的旧油迹与新鲜湿油要分开看。轻微 gasket seep 可估价；持续滴油或来源不明要专业诊断。" },
      { id: "fork", title: "前叉与 fork seal", summary: "内管无锈点/伤痕，压动后没有油圈。", how: "擦干 fork tube，压几次前叉再看是否出现湿油环。润滑油应在 fork 内部，外管持续湿润代表 seal 可能漏。" },
      { id: "rear-shock", title: "后避震与 linkage", summary: "无漏油、异响或不自然回弹。", how: "压车尾观察回弹是否受控；检查 shock body 周围湿油、linkage 松旷与异响。" },
      { id: "fairing", title: "原厂红色 fairing / 车衣", summary: "你喜欢的外观完整，固定点没有裂或乱锁。", how: "审美有真实价值，但只影响总拥有成本，不能抵消 engine、gearbox、frame 或 cooling 风险。检查内侧卡扣、螺丝与色差。" }
    ]
  },
  {
    id: "engine", title: "Engine 与排气", subtitle: "听声音、看烟、看怠速", items: [
      { id: "start", title: "启动与 idle", summary: "一次启动，idle 稳定，不需持续补油。", how: "观察冷/热车是否难启动、RPM 大幅浮动或频繁熄火。可能只是 battery/plug，也可能涉及 compression 或 valve clearance；不要替卖家先下结论。" },
      { id: "knock", title: "严重金属 knocking", summary: "没有随 RPM 加重的深沉 knock / tok 声。", how: "轻微 injector/valvetrain tick 不等同 bottom-end knock。若 crankcase 深处沉重敲击随转速明显加快，优先放弃。", critical: true },
      { id: "rattle", title: "Rattling / cam-chain 声", summary: "Cylinder head 附近没有持续异常哒啦声。", how: "明显 rattling 可能涉及 cam-chain/tensioner 或 valvetrain。先查原因与报价，不确定时不要当成正常老车声音。" },
      { id: "smoke", title: "排烟颜色", summary: "热车后无持续蓝烟或大量白烟。", how: "持续蓝灰烟常见于烧机油；完全热车后仍大量白烟并伴 coolant 下降也危险。黑烟/重汽油味可能是过浓或乱改 ECU/fueling。", critical: true },
      { id: "throttle", title: "轻催油反应", summary: "升降转顺畅，无 misfire、迟滞或异常震动。", how: "原地只轻催，不要长时间高转。留意回落是否正常、是否断续与有没有异常金属声。" },
      { id: "exhaust", title: "Exhaust 与改装", summary: "原厂或能确认合法、不过响，fueling 未乱改。", how: "Aftermarket exhaust 本身权重较低，但要把恢复原厂/合规的费用计入。对话中的 stock exhaust 参考约 RM200–450。", defaultCost: 300 }
    ]
  },
  {
    id: "cooling", title: "Cooling system", subtitle: "一定让温度真正上来", items: [
      { id: "coolant-level", title: "Coolant 液位与颜色", summary: "副水箱液位合理，没有油污或不明沉淀。", how: "冷车才开 radiator cap；热车不要开。现场主要看 reservoir、hose、水泵附近和地面有无新鲜 coolant。" },
      { id: "fan", title: "Radiator fan 启动", summary: "达到工作温度后 fan 会启动，温度能回稳。", how: "原地等待或试骑后观察。风扇不转、温度持续爬升、boiling/overflow 或强烈 coolant 味都不能忽略。" },
      { id: "overheat", title: "过热或不明 coolant leak", summary: "无 overheating，冷却液不持续流失。", how: "不明 coolant 问题不是小 cosmetic fault。原因未确认、持续溢出或温度失控时直接停止交易。", critical: true },
      { id: "oil-coolant", title: "Oil / coolant 互混迹象", summary: "无奶咖色乳化物或油膜。", how: "Filler cap 少量 condensation 不能单独定罪，但机油明显乳化并伴 coolant 下降/过热是重大风险。", critical: true }
    ]
  },
  {
    id: "running", title: "操控与电器", subtitle: "安全系统先于外观", items: [
      { id: "brakes", title: "前后 brake", summary: "制动力线性，lever/pedal 不软、不抖、不拖。", how: "看 pad 余量、disc 深槽/蓝斑、brake fluid。低速分别测试前后刹车；任何严重制动问题先停止试骑。" },
      { id: "steering", title: "Steering head 与车把", summary: "左右顺滑，中间无卡点，前端无松旷。", how: "前刹捏住前后推车听 head bearing knock；转动车把确认线束/油门不被拉扯。" },
      { id: "clutch", title: "Clutch 手感与声音", summary: "接合顺、无打滑，拉放 clutch 的声音变化合理。", how: "启动时 clutch noise 要分别记录拉住与放开时的变化；明显异响、拖档或高档加速转速升但车速不升需诊断。" },
      { id: "electrical", title: "灯具、signal 与 horn", summary: "近远灯、brake light、左右 signal、仪表与 horn 全部工作。", how: "Modified headlight 要确认照明与接线；signal 不亮是实际安全/合规问题，不只是审美。" },
      { id: "controls", title: "油门、lever 与脚踏", summary: "回位顺畅，操作件无弯曲或松旷。", how: "把手左右打满时 RPM 不应改变。检查 bar end、lever、脚踏同侧刮伤以辅助判断摔车。" }
    ]
  },
  {
    id: "wear", title: "轮胎与传动", subtitle: "能换，但要立刻换算成钱", items: [
      { id: "tyre-date", title: "Tyre 生产日期", summary: "找到四位 date code；5–6 年以上保守计入换胎。", how: "例如 1823 = 2023 年第 18 周。它是生产日期而非简单 expiry date；对雨天 grip 要求高时，老胎即使有纹也应提高警惕。", defaultCost: 650 },
      { id: "tyre-tread", title: "胎纹与 TWI", summary: "胎面明显高于 wear indicator。", how: "沿 sidewall 的小三角/TWI 标记找 groove 内凸条。胎面接近或齐平 TWI 就按需要换胎处理。同一套 tyre 只记一次更换费用，避免重复扣款。" },
      { id: "tyre-age", title: "裂纹、硬化与鼓包", summary: "Sidewall/groove 无裂纹、鼓包或 cord 外露。", how: "大量细裂、明显硬化、sidewall damage、变形或露 cord 不适合继续高速使用。同一套 tyre 只记一次更换费用。" },
      { id: "tyre-wear", title: "胎型与偏磨", summary: "轮胎保持圆弧，无严重 squared / cupping。", how: "从车尾看中央是否磨平；左右异常偏磨还可能提示胎压、alignment 或 suspension 问题。" },
      { id: "chain", title: "Chain slack、死节与 tight spots", summary: "松紧合理，转轮多处一致，无 stiff link / 重锈。", how: "具体 slack 看车身贴纸/manual。转动后轮检查多处；某位置突然很紧/松是不均匀拉伸。", defaultCost: 400 },
      { id: "sprocket", title: "Sprocket teeth", summary: "齿厚且对称，不尖、不弯成 shark-fin。", how: "在 rear sprocket 最后方把 chain 往后拉；若轻易拉开很大距离并露出齿，chain/sprocket 已有明显磨损。与 chain 通常作为一套更换，只记一次费用。" },
      { id: "wheels", title: "轮圈、bearing 与 alignment", summary: "轮圈无变形，转动顺畅，无侧向松旷。", how: "观察旋转摆动、异响和前后轮 alignment。发现撞击变形时先查事故与维修成本。" }
    ]
  },
  {
    id: "ride", title: "Test ride 与复检", subtitle: "有些问题只有负载下才出现", items: [
      { id: "gearbox", title: "1–6 档与 gearbox", summary: "每档进退清楚，无跳档、假空档或打齿。", how: "温和加减速逐档测试，尤其在负载下。某档跳回空档/别档、严重 grinding 或持续异常，直接放弃而不是只砍价。", critical: true },
      { id: "power", title: "动力与 acceleration", summary: "输出线性，无 hesitation、misfire 或异常无力。", how: "Throttle 已明显打开却断续、剧震或动力远低于正常 R25，需要查 ignition、fueling、compression 等原因。" },
      { id: "tracking", title: "直行、转向与震动", summary: "低风险条件下车身直行稳定，无异常 wobble。", how: "不要为了检查而冒险撒手。留意车把偏、刹车抖、轮组/车架 alignment 与特定速度震动。" },
      { id: "hot-restart", title: "热车重新启动", summary: "熄火后可顺利 restart，idle 仍稳定。", how: "热启动困难能暴露冷车看不到的 battery/charging、fueling、valve clearance 或 compression 问题。" },
      { id: "post-leak", title: "骑后再次找 leak", summary: "热车停放后无新鲜 oil / coolant 滴漏。", how: "回到停车点等几分钟，重新看 engine 接缝、水泵、hose、fork 与地面。热胀压力下的 leak 可能此时才出现。" },
      { id: "charging", title: "Charging 与电池表现", summary: "多次启动有力，仪表灯不异常变暗。", how: "最好用 multimeter 检查；没有工具时记录启动速度、怠速与轻催油时灯光变化，异常只作为进一步诊断线索。" }
    ]
  },
  {
    id: "final", title: "成交前最后确认", subtitle: "把所有口头承诺落到现实", items: [
      { id: "numbers", title: "Engine / chassis number 最终核对", summary: "实车号码与文件完全一致，无可疑打磨。", how: "成交前再核对一次并按当地流程完成身份与车辆验证。号码或 ownership 有疑问就不付款。", critical: true },
      { id: "price", title: "用问题谈价，不先报 ceiling", summary: "逐项列出立即维修，再提出有依据的 offer。", how: "对话基准：RM6.0k–6.3k 很好；RM6.4k–6.5k 车况好可接受；RM6.6k–6.7k 接近上限；RM6.8k+ 相对 dealer 保护开始失去优势。" },
      { id: "payment", title: "付款与过户顺序", summary: "交易节点明确，不在 ownership 未完成时承担全部风险。", how: "与你父亲及卖家先约定 JPJ/tukar nama、付款、交车、保险的安全顺序；保留收据与双方确认。", critical: true },
      { id: "emotion", title: "最后一次情绪检查", summary: "喜欢红色外观，但没有因此原谅机械问题。", how: "问自己：若 fairing 不是喜欢的红色，我还会接受相同 engine、gearbox、cooling 与 frame 状况吗？答案若是否，就停。" }
    ]
  }
];

const STORAGE_KEY = "ridecheck-r25-v1";
const allItems = sections.flatMap(section => section.items.map(item => ({ ...item, sectionId: section.id, sectionTitle: section.title })));
let state = loadState();
let currentFilter = "all";
let allExpanded = false;
let toastTimer;

const els = {
  checklist: document.querySelector("#checklist"), sectionNav: document.querySelector("#sectionNav"),
  emptyState: document.querySelector("#emptyState"), progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"), progressTitle: document.querySelector("#progressTitle"),
  progressDetail: document.querySelector("#progressDetail"), remainingCount: document.querySelector("#remainingCount"),
  okCount: document.querySelector("#okCount"), watchCount: document.querySelector("#watchCount"), failCount: document.querySelector("#failCount"),
  sectionFraction: document.querySelector("#sectionFraction"), stopStrip: document.querySelector("#stopStrip"),
  verdictBadge: document.querySelector("#verdictBadge"), deductionList: document.querySelector("#deductionList"),
  repairTotal: document.querySelector("#repairTotal"), offerPrice: document.querySelector("#offerPrice"), offerRange: document.querySelector("#offerRange"),
  toast: document.querySelector("#toast")
};

function defaultState() {
  return { items: {}, bike: { name: "红色 Yamaha R25", year: "2016", mileage: "59000", asking: "7300" }, cleanValue: "6500", dealerBenchmark: "6750", generalNotes: "" };
}

function loadState() {
  try { return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return defaultState(); }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function itemState(id) { return state.items[id] || { status: "pending", note: "", cost: "" }; }
function money(value) { return new Intl.NumberFormat("en-MY", { maximumFractionDigits: 0 }).format(Math.max(0, Number(value) || 0)); }
function escapeHtml(value = "") { return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }

function renderNav() {
  els.sectionNav.innerHTML = sections.map((section, index) => {
    const completed = section.items.filter(item => itemState(item.id).status !== "pending").length;
    const percent = completed / section.items.length * 100;
    return `<button class="section-link" data-section-link="${section.id}" type="button"><span class="section-number">${String(index + 1).padStart(2, "0")}</span><span>${section.title}</span><span class="section-meter"><i style="width:${percent}%"></i></span></button>`;
  }).join("");
}

function renderChecklist() {
  let visibleItems = 0;
  els.checklist.innerHTML = sections.map((section, index) => {
    const rows = section.items.map(item => {
      const saved = itemState(item.id);
      const visible = currentFilter === "all" || (currentFilter === "pending" && saved.status === "pending") || (currentFilter === "flagged" && ["watch", "fail"].includes(saved.status));
      if (!visible) return "";
      visibleItems += 1;
      const costValue = saved.cost || ((saved.status === "watch" || saved.status === "fail") && item.defaultCost ? item.defaultCost : "");
      return `<article class="check-item status-${saved.status} ${allExpanded ? "expanded" : ""}" data-item="${item.id}">
        <div class="check-main">
          <div>
            <div class="check-heading"><h3>${item.title}</h3>${item.critical ? '<span class="critical-tag">底线</span>' : ""}</div>
            <p class="check-summary">${item.summary}</p>
          </div>
          <div class="status-control" role="group" aria-label="${item.title} 状态">
            <button class="status-button ${saved.status === "ok" ? "active" : ""}" data-status="ok" type="button">✓ OK</button>
            <button class="status-button ${saved.status === "watch" ? "active" : ""}" data-status="watch" type="button">! 注意</button>
            <button class="status-button ${saved.status === "fail" ? "active" : ""}" data-status="fail" type="button">× 不要</button>
          </div>
        </div>
        <div class="check-details">
          <p class="how-to">${item.how}</p>
          <div class="item-inputs">
            <label>现场备注<input data-note="${item.id}" value="${escapeHtml(saved.note || "")}" placeholder="写下声音、位置、卖家解释…"></label>
            <label>立即维修预估<div class="cost-wrap"><span>RM</span><input data-cost="${item.id}" value="${escapeHtml(String(costValue))}" inputmode="decimal" placeholder="0"></div></label>
          </div>
        </div>
      </article>`;
    }).join("");
    if (!rows) return "";
    return `<section class="check-section" id="section-${section.id}" data-section="${section.id}">
      <div class="section-title-row"><div><span class="micro-label">STEP ${String(index + 1).padStart(2, "0")}</span><h2>${section.title}</h2></div><span>${section.subtitle}</span></div>${rows}
    </section>`;
  }).join("");
  els.emptyState.hidden = visibleItems > 0;
  bindChecklistEvents();
  updateSummary();
}

function bindChecklistEvents() {
  document.querySelectorAll(".status-button").forEach(button => button.addEventListener("click", () => {
    const card = button.closest(".check-item");
    const id = card.dataset.item;
    const previous = itemState(id);
    const nextStatus = previous.status === button.dataset.status ? "pending" : button.dataset.status;
    const item = allItems.find(candidate => candidate.id === id);
    state.items[id] = { ...previous, status: nextStatus };
    if (!state.items[id].cost && ["watch", "fail"].includes(nextStatus) && item.defaultCost) state.items[id].cost = String(item.defaultCost);
    saveState();
    if (item.critical && nextStatus === "fail") {
      els.stopStrip.classList.remove("alerting"); void els.stopStrip.offsetWidth; els.stopStrip.classList.add("alerting");
      showToast("触发底线：这不是谈价项目，建议停止交易");
    }
    renderNav(); renderChecklist();
  }));
  document.querySelectorAll("[data-note]").forEach(input => input.addEventListener("input", event => {
    const id = event.target.dataset.note; state.items[id] = { ...itemState(id), note: event.target.value }; saveState();
  }));
  document.querySelectorAll("[data-cost]").forEach(input => input.addEventListener("input", event => {
    const id = event.target.dataset.cost; state.items[id] = { ...itemState(id), cost: event.target.value.replace(/[^0-9.]/g, "") }; saveState(); updateSummary();
  }));
  document.querySelectorAll(".check-heading, .check-summary").forEach(target => target.addEventListener("click", () => target.closest(".check-item").classList.toggle("expanded")));
}

function updateSummary() {
  const counts = { pending: 0, ok: 0, watch: 0, fail: 0 };
  allItems.forEach(item => counts[itemState(item.id).status]++);
  const done = allItems.length - counts.pending;
  const percent = Math.round(done / allItems.length * 100);
  els.progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);
  els.progressRing.setAttribute("aria-label", `完成进度 ${percent}%`);
  els.progressPercent.textContent = `${percent}%`;
  els.remainingCount.textContent = counts.pending;
  els.okCount.textContent = counts.ok; els.watchCount.textContent = counts.watch; els.failCount.textContent = counts.fail;
  els.sectionFraction.textContent = `${done} / ${allItems.length}`;
  els.progressTitle.textContent = percent === 100 ? "检查完成" : percent >= 60 ? "进入后半程" : percent > 0 ? "检查进行中" : "准备开始";
  els.progressDetail.innerHTML = percent === 100 ? "所有项目已有记录。现在看最终判断。" : `还有 <strong>${counts.pending}</strong> 项未检查。结果会自动保存在这台设备。`;

  const deductions = allItems.filter(item => ["watch", "fail"].includes(itemState(item.id).status) && Number(itemState(item.id).cost) > 0);
  const repair = deductions.reduce((sum, item) => sum + Number(itemState(item.id).cost || 0), 0);
  els.deductionList.innerHTML = deductions.length ? deductions.map(item => `<div class="deduction-item"><span>${item.title}</span><strong>− RM${money(itemState(item.id).cost)}</strong></div>`).join("") : "<span>还没有记录维修项目</span>";
  els.repairTotal.textContent = `− RM${money(repair)}`;

  const criticalFails = allItems.filter(item => item.critical && itemState(item.id).status === "fail");
  const criticalPending = allItems.filter(item => item.critical && itemState(item.id).status === "pending").length;
  const clean = Number(state.cleanValue) || 6500;
  const offer = Math.max(0, clean - repair);
  els.verdictBadge.className = "verdict";

  if (criticalFails.length) {
    els.verdictBadge.classList.add("stop"); els.verdictBadge.querySelector("strong").textContent = "建议放弃";
    els.offerPrice.textContent = "不要报价";
    els.offerRange.textContent = `触发 ${criticalFails.length} 条底线：${criticalFails.map(item => item.title).join("、")}`;
  } else if (criticalPending > 0) {
    els.verdictBadge.classList.add("pending"); els.verdictBadge.querySelector("strong").textContent = "继续检查";
    els.offerPrice.textContent = done ? `RM ${money(offer)}` : "RM —";
    els.offerRange.textContent = `还有 ${criticalPending} 项底线未确认；当前数字只能暂作参考。`;
  } else if (counts.watch || counts.fail) {
    els.verdictBadge.classList.add("warning"); els.verdictBadge.querySelector("strong").textContent = "可谈价 / 先诊断";
    els.offerPrice.textContent = `RM ${money(offer)}`;
    els.offerRange.textContent = offer <= 6300 ? "落在理想目标附近；用每项维修成本支持你的 offer。" : "价格仍接近 clean value；确认所有问题都已计价。";
  } else {
    els.verdictBadge.classList.add("safe"); els.verdictBadge.querySelector("strong").textContent = "关键项通过";
    els.offerPrice.textContent = `RM ${money(offer)}`;
    els.offerRange.textContent = "关键底线已通过。RM6,300–6,500 是对话中的舒服成交区间。";
  }
}

function showToast(message) {
  clearTimeout(toastTimer); els.toast.textContent = message; els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function syncInputsFromState() {
  const map = { bikeName: ["bike", "name"], bikeYear: ["bike", "year"], bikeMileage: ["bike", "mileage"], askingPrice: ["bike", "asking"], cleanValue: [null, "cleanValue"], dealerBenchmark: [null, "dealerBenchmark"], generalNotes: [null, "generalNotes"] };
  Object.entries(map).forEach(([id, [group, key]]) => { document.querySelector(`#${id}`).value = group ? state[group][key] : state[key]; });
}

function summaryText() {
  const flagged = allItems.filter(item => ["watch", "fail"].includes(itemState(item.id).status));
  const criticalFails = flagged.filter(item => item.critical && itemState(item.id).status === "fail");
  const repair = flagged.reduce((sum, item) => sum + Number(itemState(item.id).cost || 0), 0);
  const offer = Math.max(0, (Number(state.cleanValue) || 6500) - repair);
  return [
    `R25 现场验车摘要`,
    `${state.bike.name} · ${state.bike.year} · ${money(state.bike.mileage)} km · Asking RM${money(state.bike.asking)}`,
    "",
    criticalFails.length ? `结论：建议放弃（底线：${criticalFails.map(item => item.title).join("、")}）` : `暂定目标价：RM${money(offer)}（clean RM${money(state.cleanValue)} − 整备 RM${money(repair)}）`,
    "",
    ...flagged.map(item => `${itemState(item.id).status === "fail" ? "❌" : "⚠️"} ${item.title}${itemState(item.id).cost ? ` · RM${money(itemState(item.id).cost)}` : ""}${itemState(item.id).note ? ` · ${itemState(item.id).note}` : ""}`),
    flagged.length ? "" : "暂无标记问题。",
    `备注：${state.generalNotes || "—"}`
  ].join("\n");
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  currentFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(candidate => candidate.classList.toggle("active", candidate === button));
  renderChecklist();
}));
document.querySelector("#expandButton").addEventListener("click", event => {
  allExpanded = !allExpanded; event.target.textContent = allExpanded ? "收起说明" : "展开说明"; renderChecklist();
});
document.querySelector("#sectionNav").addEventListener("click", event => {
  const button = event.target.closest("[data-section-link]"); if (!button) return;
  document.querySelector(`#section-${button.dataset.section}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#resetButton").addEventListener("click", () => {
  if (!confirm("确定清除这台设备上的全部验车记录吗？")) return;
  state = defaultState(); saveState(); syncInputsFromState(); renderNav(); renderChecklist(); showToast("验车记录已重置");
});
document.querySelector("#printButton").addEventListener("click", () => window.print());
document.querySelector("#copySummary").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(summaryText()); showToast("验车摘要已复制"); }
  catch { showToast("复制失败，请使用下载记录"); }
});
document.querySelector("#exportButton").addEventListener("click", () => {
  const payload = { exportedAt: new Date().toISOString(), ...state, summary: summaryText() };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const link = document.createElement("a"); link.href = url; link.download = `ridecheck-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(url);
  showToast("JSON 记录已下载");
});

const inputBindings = { bikeName: ["bike", "name"], bikeYear: ["bike", "year"], bikeMileage: ["bike", "mileage"], askingPrice: ["bike", "asking"], cleanValue: [null, "cleanValue"], dealerBenchmark: [null, "dealerBenchmark"], generalNotes: [null, "generalNotes"] };
Object.entries(inputBindings).forEach(([id, [group, key]]) => document.querySelector(`#${id}`).addEventListener("input", event => {
  if (group) state[group][key] = event.target.value; else state[key] = event.target.value;
  saveState(); if (["cleanValue", "dealerBenchmark"].includes(key)) updateSummary();
}));

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  document.querySelectorAll(".section-link").forEach(link => link.classList.toggle("active", link.dataset.sectionLink === visible.target.dataset.section));
}, { rootMargin: "-18% 0px -65%", threshold: [0, .25, .6] });

syncInputsFromState(); renderNav(); renderChecklist();
document.querySelectorAll(".check-section").forEach(section => observer.observe(section));
