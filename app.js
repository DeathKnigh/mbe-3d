// MBE (分子束外延) 基础知识数据
const mbeData = {
    principle: [
        { 
            id: 1, 
            name: "MBE 基本原理", 
            category: "principle", 
            color: 0x00d9ff,
            content: `
                <p><span class="highlight">分子束外延 (MBE)</span> 是在超高真空环境下，将组成元素的热蒸发束流喷射到加热的衬底表面，进行外延生长的技术。</p>
                <p><span class="category">核心特点：</span></p>
                <ul>
                    <li>超高真空环境 (10⁻~10¹¹ Pa)</li>
                    <li>原子级精确控制膜厚</li>
                    <li>低温生长，减少杂质扩散</li>
                    <li>可实时监控生长过程</li>
                </ul>
            `
        },
        { 
            id: 2, 
            name: "分子束产生", 
            category: "principle", 
            color: 0x00d9ff,
            content: `
                <p><span class="category">克努森盒 (Knudsen Cell)</span> 是 MBE 的核心部件，用于产生稳定的分子束流。</p>
                <p><span class="category">工作原理：</span></p>
                <ul>
                    <li>固体源材料在坩中加热蒸发</li>
                    <li>通过小孔形成准直分子束</li>
                    <li>束流强度由温度精确控制</li>
                    <li>快门控制束流的通断</li>
                </ul>
            `
        },
        { 
            id: 3, 
            name: "表面迁移与成核", 
            category: "principle", 
            color: 0x00d9ff,
            content: `
                <p>吸附原子在衬底表面的行为决定薄膜质量。</p>
                <p><span class="category">关键过程：</span></p>
                <ul>
                    <li><span class="highlight">吸附：</span>原子到达衬底表面</li>
                    <li><span class="highlight">迁移：</span>原子在表面扩散寻找能量最低位置</li>
                    <li><span class="highlight">成核：</span>原子聚集形成晶核</li>
                    <li><span class="highlight">生长：</span>晶核扩大形成连续薄膜</li>
                </ul>
            `
        },
        { 
            id: 4, 
            name: "层状生长模式", 
            category: "principle", 
            color: 0x00d9ff,
            content: `
                <p><span class="highlight">Frank-van der Merwe 模式</span> 是 MBE 追求的理想生长模式。</p>
                <p><span class="category">三种生长模式：</span></p>
                <ul>
                    <li><span class="level">层状生长 (FvdM)：</span>原子逐层生长，最理想</li>
                    <li><span class="level">岛状生长 (VW)：</span>形成三维岛，应避免</li>
                    <li><span class="level">层岛混合 (SK)：</span>先层后岛，某些体系固有</li>
                </ul>
            `
        },
        { 
            id: 5, 
            name: "晶格匹配", 
            category: "principle", 
            color: 0x00d9ff,
            content: `
                <p>外延层与衬底的晶格常数匹配是获得高质量薄膜的关键。</p>
                <p><span class="category">晶格失配影响：</span></p>
                <ul>
                    <li><span class="highlight">&lt;1%：</span>赝晶生长，应变量被衬底吸收</li>
                    <li><span class="highlight">1-7%：</span>产生失配位错</li>
                    <li><span class="highlight">&gt;7%：</span>多晶或非晶生长</li>
                </ul>
                <p>可通过缓冲层或超晶格结构缓解应力。</p>
            `
        }
    ],
    equipment: [
        { 
            id: 6, 
            name: "超高真空系统", 
            category: "equipment", 
            color: 0x00ff88,
            content: `
                <p>MBE 必须在超高真空环境下工作。</p>
                <p><span class="category">真空系统组成：</span></p>
                <ul>
                    <li><span class="highlight">机械泵：</span>初级泵，达到低真空</li>
                    <li><span class="highlight">分子泵：</span>高真空主泵</li>
                    <li><span class="highlight">离子泵/钛升华泵：</span>维持超高真空</li>
                    <li><span class="highlight">真空计：</span>监测真空度</li>
                </ul>
                <p>极限真空可达 10⁻¹¹ Pa 量级。</p>
            `
        },
        { 
            id: 7, 
            name: "分子束源炉", 
            category: "equipment", 
            color: 0x00ff88,
            content: `
                <p>源炉是 MBE 设备的"心脏"，决定材料组分精度。</p>
                <p><span class="category">源炉类型：</span></p>
                <ul>
                    <li><span class="level">标准克努森盒：</span>适用于 Ga、Al、In 等金属</li>
                    <li><span class="level">气体源柜：</span>用于 As、P 等易挥发元素</li>
                    <li><span class="level">电子束蒸发源：</span>用于高熔点材料</li>
                    <li><span class="level">裂解源：</span>将分子裂解为原子态</li>
                </ul>
            `
        },
        { 
            id: 8, 
            name: "衬底加热系统", 
            category: "equipment", 
            color: 0x00ff88,
            content: `
                <p>精确控制衬底温度对晶体质量至关重要。</p>
                <p><span class="category">加热方式：</span></p>
                <ul>
                    <li><span class="highlight">电阻加热：</span>最常见，温度均匀性好</li>
                    <li><span class="highlight">辐射加热：</span>适用于高温生长</li>
                    <li><span class="highlight">感应加热：</span>快速升降温</li>
                </ul>
                <p>温度范围：室温 ~ 1200°C，精度 ±1°C</p>
            `
        },
        { 
            id: 9, 
            name: "原位监测系统", 
            category: "equipment", 
            color: 0x00ff88,
            content: `
                <p>MBE 的优势之一是可以实时监控生长过程。</p>
                <p><span class="category">常用监测技术：</span></p>
                <ul>
                    <li><span class="highlight">RHEED：</span>反射式高能电子衍射，监测表面结构</li>
                    <li><span class="highlight">椭偏仪：</span>测量膜厚和光学常数</li>
                    <li><span class="highlight">质谱仪：</span>分析残余气体成分</li>
                    <li><span class="highlight">高温计：</span>非接触测温</li>
                </ul>
            `
        },
        { 
            id: 10, 
            name: "生长腔体结构", 
            category: "equipment", 
            color: 0x00ff88,
            content: `
                <p>典型的 MBE 系统采用模块化设计。</p>
                <p><span class="category">腔体组成：</span></p>
                <ul>
                    <li><span class="level">生长室：</span>核心区域，安装源炉和衬底台</li>
                    <li><span class="level">进样室：</span>样品进出，不影响主真空</li>
                    <li><span class="level">预处理室：</span>衬底清洗和脱氧</li>
                    <li><span class="level">分析室：</span>集成表面分析设备</li>
                </ul>
            `
        }
    ],
    process: [
        { 
            id: 11, 
            name: "衬底准备", 
            category: "process", 
            color: 0xffcc00,
            content: `
                <p>衬底质量直接决定外延层质量。</p>
                <p><span class="category">准备步骤：</span></p>
                <ul>
                    <li><span class="highlight">切割：</span>沿特定晶向切割</li>
                    <li><span class="highlight">抛光：</span>机械抛光 + 化学机械抛光</li>
                    <li><span class="highlight">清洗：</span>有机溶剂 + 酸洗 + 去离子水</li>
                    <li><span class="highlight">脱氧：</span>在真空或氢气中高温退火</li>
                </ul>
            `
        },
        { 
            id: 12, 
            name: "生长前处理", 
            category: "process", 
            color: 0xffcc00,
            content: `
                <p>进入生长室后需要进一步处理。</p>
                <p><span class="category">处理流程：</span></p>
                <ul>
                    <li>进样室预抽真空</li>
                    <li>转移到生长室</li>
                    <li>升温脱附表面氧化物</li>
                    <li>RHEED 确认表面重构</li>
                    <li>降温到生长温度</li>
                </ul>
            `
        },
        { 
            id: 13, 
            name: "缓冲层生长", 
            category: "process", 
            color: 0xffcc00,
            content: `
                <p>缓冲层用于改善外延层质量。</p>
                <p><span class="category">缓冲层作用：</span></p>
                <ul>
                    <li>缓解晶格失配应力</li>
                    <li>阻挡衬底杂质扩散</li>
                    <li>提供理想成核表面</li>
                    <li>降低位错密度</li>
                </ul>
                <p>典型厚度：50-500nm</p>
            `
        },
        { 
            id: 14, 
            name: "外延层生长", 
            category: "process", 
            color: 0xffcc00,
            content: `
                <p>核心生长过程，需要精确控制多个参数。</p>
                <p><span class="category">关键参数：</span></p>
                <ul>
                    <li><span class="highlight">衬底温度：</span>影响表面迁移和掺入</li>
                    <li><span class="highlight">束流比：</span>决定材料组分</li>
                    <li><span class="highlight">生长速率：</span>通常 0.1-2 μm/h</li>
                    <li><span class="highlight">V/III 比：</span>化合物半导体关键参数</li>
                </ul>
            `
        },
        { 
            id: 15, 
            name: "原位退火", 
            category: "process", 
            color: 0xffcc00,
            content: `
                <p>生长完成后进行退火处理。</p>
                <p><span class="category">退火目的：</span></p>
                <ul>
                    <li>激活掺杂剂</li>
                    <li>修复生长缺陷</li>
                    <li>改善界面质量</li>
                    <li>释放内应力</li>
                </ul>
                <p>退火温度通常高于生长温度。</p>
            `
        }
    ],
    materials: [
        { 
            id: 16, 
            name: "III-V 族化合物", 
            category: "materials", 
            color: 0xff6b9d,
            content: `
                <p>MBE 最早成功应用的材料体系。</p>
                <p><span class="category">典型材料：</span></p>
                <ul>
                    <li><span class="highlight">GaAs：</span>最成熟，用于高速器件</li>
                    <li><span class="highlight">InP：</span>光通信核心材料</li>
                    <li><span class="highlight">GaN：</span>蓝光 LED、功率器件</li>
                    <li><span class="highlight">AlGaAs/GaAs：</span>量子阱、超晶格</li>
                </ul>
            `
        },
        { 
            id: 17, 
            name: "II-VI 族化合物", 
            category: "materials", 
            color: 0xff6b9d,
            content: `
                <p>主要用于光电器件。</p>
                <p><span class="category">典型材料：</span></p>
                <ul>
                    <li><span class="level">ZnSe：</span>蓝绿光 LED</li>
                    <li><span class="level">CdTe：</span>红外探测器、太阳能电池</li>
                    <li><span class="level">HgCdTe：</span>红外焦平面阵列</li>
                    <li><span class="level">ZnO：</span>紫外光电器件</li>
                </ul>
            `
        },
        { 
            id: 18, 
            name: "IV 族半导体", 
            category: "materials", 
            color: 0xff6b9d,
            content: `
                <p>硅基 MBE 是近年研究热点。</p>
                <p><span class="category">材料体系：</span></p>
                <ul>
                    <li><span class="highlight">Si/SiGe：</span>应变硅技术</li>
                    <li><span class="highlight">Ge：</span>高速器件、光电子集成</li>
                    <li><span class="highlight">Sn 基合金：</span>中红外应用</li>
                </ul>
                <p>挑战：硅表面易氧化，需要特殊处理。</p>
            `
        },
        { 
            id: 19, 
            name: "氧化物材料", 
            category: "materials", 
            color: 0xff6b9d,
            content: `
                <p>氧化物 MBE 是新兴领域。</p>
                <p><span class="category">功能氧化物：</span></p>
                <ul>
                    <li><span class="level">高温超导：</span>YBCO、BSCCO</li>
                    <li><span class="level">铁电材料：</span>BaTiO₃、PZT</li>
                    <li><span class="level">磁性氧化物：</span>Fe₃O、CrO₂</li>
                    <li><span class="level">透明导电：</span>ITO、AZO</li>
                </ul>
            `
        },
        { 
            id: 20, 
            name: "拓扑绝缘体", 
            category: "materials", 
            color: 0xff6b9d,
            content: `
                <p>前沿研究材料。</p>
                <p><span class="category">典型材料：</span></p>
                <ul>
                    <li><span class="highlight">Bi₂Se₃：</span>室温拓扑绝缘体</li>
                    <li><span class="highlight">Bi₂Te₃：</span>热电材料</li>
                    <li><span class="highlight">Sb₂Te₃：</span>相变存储</li>
                </ul>
                <p>MBE 可制备高质量薄膜，研究表面态物理。</p>
            `
        }
    ],
    application: [
        { 
            id: 21, 
            name: "高速电子器件", 
            category: "application", 
            color: 0x9d4fff,
            content: `
                <p>MBE 生长的材料用于高频高速应用。</p>
                <p><span class="category">器件类型：</span></p>
                <ul>
                    <li><span class="highlight">HEMT：</span>高电子迁移率晶体管</li>
                    <li><span class="highlight">HBT：</span>异质结双极晶体管</li>
                    <li><span class="highlight">量子级联激光器：</span>中远红外光源</li>
                </ul>
                <p>工作频率可达数百 GHz。</p>
            `
        },
        { 
            id: 22, 
            name: "光电子器件", 
            category: "application", 
            color: 0x9d4fff,
            content: `
                <p>MBE 是光电子器件的核心制备技术。</p>
                <p><span class="category">应用领域：</span></p>
                <ul>
                    <li><span class="level">LED：</span>蓝光、绿光、白光照明</li>
                    <li><span class="level">激光二极管：</span>光通信、光存储</li>
                    <li><span class="level">光电探测器：</span>光纤通信接收端</li>
                    <li><span class="level">太阳能电池：</span>高效率多结电池</li>
                </ul>
            `
        },
        { 
            id: 23, 
            name: "量子器件", 
            category: "application", 
            color: 0x9d4fff,
            content: `
                <p>MBE 的原子级控制能力使其成为量子器件的理想选择。</p>
                <p><span class="category">量子结构：</span></p>
                <ul>
                    <li><span class="highlight">量子阱：</span>二维限制，能带工程</li>
                    <li><span class="highlight">量子线：</span>一维限制</li>
                    <li><span class="highlight">量子点：</span>零维限制，"人造原子"</li>
                    <li><span class="highlight">超晶格：</span>周期性结构，人工能带</li>
                </ul>
            `
        },
        { 
            id: 24, 
            name: "自旋电子器件", 
            category: "application", 
            color: 0x9d4fff,
            content: `
                <p>利用电子自旋的新型器件。</p>
                <p><span class="category">器件类型：</span></p>
                <ul>
                    <li><span class="level">磁隧道结 (MTJ)：</span>MRAM 存储单元</li>
                    <li><span class="level">自旋阀：</span>磁传感器</li>
                    <li><span class="level">自旋晶体管：</span>低功耗逻辑</li>
                </ul>
                <p>MBE 可制备高质量磁性/非磁多层膜。</p>
            `
        },
        { 
            id: 25, 
            name: "拓扑量子器件", 
            category: "application", 
            color: 0x9d4fff,
            content: `
                <p>前沿研究领域。</p>
                <p><span class="category">研究方向：</span></p>
                <ul>
                    <li><span class="highlight">拓扑量子计算：</span>马约拉纳费米子</li>
                    <li><span class="highlight">量子反常霍尔效应：</span>无耗散边缘态</li>
                    <li><span class="highlight">拓扑激光器：</span>鲁棒性光传输</li>
                </ul>
                <p>需要 MBE 制备原子级平整界面。</p>
            `
        },
        { 
            id: 26, 
            name: "功率电子器件", 
            category: "application", 
            color: 0x9d4fff,
            content: `
                <p>宽禁带半导体是功率器件的核心。</p>
                <p><span class="category">材料体系：</span></p>
                <ul>
                    <li><span class="level">GaN：</span>高效电源、快充</li>
                    <li><span class="level">SiC：</span>电动汽车、电网</li>
                    <li><span class="level">AlN：</span>深紫外、高频</li>
                </ul>
                <p>MBE 可精确控制掺杂和界面。</p>
            `
        }
    ],
    advantage: [
        { 
            id: 27, 
            name: "MBE 技术优势", 
            category: "advantage", 
            color: 0x00ffaa,
            content: `
                <p>相比其他外延技术，MBE 有独特优势。</p>
                <p><span class="category">核心优势：</span></p>
                <ul>
                    <li><span class="highlight">超高纯度：</span>超高真空减少杂质</li>
                    <li><span class="highlight">原子级控制：</span>单原子层精度</li>
                    <li><span class="highlight">低温生长：</span>减少互扩散</li>
                    <li><span class="highlight">原位监测：</span>实时反馈控制</li>
                    <li><span class="highlight">陡峭界面：</span> abrupt heterojunction</li>
                </ul>
            `
        },
        { 
            id: 28, 
            name: "与 MOCVD 对比", 
            category: "advantage", 
            color: 0x00ffaa,
            content: `
                <p>MBE 和 MOCVD 是两种主要外延技术。</p>
                <p><span class="category">MBE 优势：</span></p>
                <ul>
                    <li>生长温度更低</li>
                    <li>界面更陡峭</li>
                    <li>原位监测更方便</li>
                    <li>适合研究开发</li>
                </ul>
                <p><span class="category">MOCVD 优势：</span></p>
                <ul>
                    <li>生长速率更快</li>
                    <li>适合大规模生产</li>
                    <li>设备成本较低</li>
                </ul>
            `
        },
        { 
            id: 29, 
            name: "技术局限性", 
            category: "advantage", 
            color: 0x00ffaa,
            content: `
                <p>MBE 也存在一些局限。</p>
                <p><span class="category">主要局限：</span></p>
                <ul>
                    <li><span class="highlight">生长速率慢：</span>通常<2μm/h</li>
                    <li><span class="highlight">设备成本高：</span>超高真空系统昂贵</li>
                    <li><span class="highlight">维护复杂：</span>需要专业人员</li>
                    <li><span class="highlight">产量低：</span>不适合大规模生产</li>
                    <li><span class="highlight">某些材料难生长：</span>高蒸气压元素控制难</li>
                </ul>
            `
        },
        { 
            id: 30, 
            name: "发展趋势", 
            category: "advantage", 
            color: 0x00ffaa,
            content: `
                <p>MBE 技术仍在不断发展。</p>
                <p><span class="category">发展方向：</span></p>
                <ul>
                    <li><span class="level">自动化：</span>AI 辅助生长控制</li>
                    <li><span class="level">原位表征：</span>更多分析手段集成</li>
                    <li><span class="level">新型材料：</span>二维材料、拓扑材料</li>
                    <li><span class="level">混合外延：</span>MBE+MOCVD 组合</li>
                    <li><span class="level">绿色 MBE：</span>降低能耗和成本</li>
                </ul>
            `
        },
        { 
            id: 31, 
            name: "学习建议", 
            category: "advantage", 
            color: 0x00ffaa,
            content: `
                <p>如何系统学习 MBE 技术？</p>
                <p><span class="category">学习路径：</span></p>
                <ul>
                    <li><span class="highlight">基础：</span>固体物理、半导体物理</li>
                    <li><span class="highlight">核心：</span>晶体生长理论、真空技术</li>
                    <li><span class="highlight">实践：</span>上机操作、生长实验</li>
                    <li><span class="highlight">进阶：</span>器件物理、能带工程</li>
                </ul>
                <p>推荐教材：《分子束外延技术》(王占国)</p>
            `
        },
        { 
            id: 32, 
            name: "安全注意事项", 
            category: "advantage", 
            color: 0x00ffaa,
            content: `
                <p>MBE 实验需要注意安全。</p>
                <p><span class="category">安全要点：</span></p>
                <ul>
                    <li><span class="highlight">高温：</span>源炉和衬底可达 1000°C+</li>
                    <li><span class="highlight">有毒元素：</span>As、P、Cd 等需要特殊处理</li>
                    <li><span class="highlight">液氮：</span>低温冻伤风险</li>
                    <li><span class="highlight">高压气体：</span>气瓶安全使用</li>
                    <li><span class="highlight">X 射线：</span>RHEED 需要防护</li>
                </ul>
            `
        }
    ]
};

// Three.js 场景设置
let scene, camera, renderer, modules = [];
let selectedModule = null;
let learnedTopics = new Set();
let currentModule = 'all';

// MBE 设备 3D 模型参数
const equipmentModels = {
    chamber: { radius: 8, height: 12, color: 0x4a5568 },
    source: { radius: 1.5, height: 4, color: 0xff6b6b },
    substrate: { radius: 3, height: 0.5, color: 0x4ecdc4 },
    detector: { radius: 1, height: 2, color: 0xffe66d }
};

function init() {
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c0c1e);
    scene.fog = new THREE.Fog(0x0c0c1e, 30, 100);
    
    // 创建相机
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 35);
    camera.lookAt(0, 0, 0);
    
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    
    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x00d9ff, 1, 50);
    pointLight1.position.set(15, 15, 15);
    pointLight1.castShadow = true;
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x00ff88, 0.8, 50);
    pointLight2.position.set(-15, 10, -15);
    scene.add(pointLight2);
    
    // 创建 MBE 设备模型
    createMBEEquipment();
    
    // 创建知识点模块
    createKnowledgeModules();
    
    // 添加粒子背景
    createParticles();
    
    // 添加鼠标交互
    setupInteraction();
    
    // 隐藏加载提示
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1500);
    
    // 开始动画
    animate();
    
    updateProgress();
}

function createMBEEquipment() {
    // 主真空腔体
    const chamberGeo = new THREE.CylinderGeometry(
        equipmentModels.chamber.radius, 
        equipmentModels.chamber.radius, 
        equipmentModels.chamber.height, 
        32
    );
    const chamberMat = new THREE.MeshPhongMaterial({ 
        color: equipmentModels.chamber.color,
        transparent: true,
        opacity: 0.3,
        shininess: 100
    });
    const chamber = new THREE.Mesh(chamberGeo, chamberMat);
    chamber.position.y = 0;
    chamber.castShadow = true;
    scene.add(chamber);
    
    // 腔体线框
    const wireframe = new THREE.LineSegments(
        new THREE.WireframeGeometry(chamberGeo),
        new THREE.LineBasicMaterial({ color: 0x00d9ff, transparent: true, opacity: 0.3 })
    );
    wireframe.position.y = 0;
    scene.add(wireframe);
    
    // 分子束源炉 (多个)
    const sourcePositions = [
        { x: -6, y: -4, z: 0, angle: Math.PI / 6 },
        { x: 6, y: -4, z: 0, angle: -Math.PI / 6 },
        { x: 0, y: -4, z: -6, angle: Math.PI / 4 }
    ];
    
    sourcePositions.forEach((pos, idx) => {
        const sourceGeo = new THREE.CylinderGeometry(
            equipmentModels.source.radius,
            equipmentModels.source.radius * 0.8,
            equipmentModels.source.height,
            16
        );
        const sourceMat = new THREE.MeshPhongMaterial({ 
            color: 0xff6b6b,
            emissive: 0x330000,
            shininess: 80
        });
        const source = new THREE.Mesh(sourceGeo, sourceMat);
        source.position.set(pos.x, pos.y, pos.z);
        source.rotation.x = pos.angle;
        source.castShadow = true;
        scene.add(source);
        
        // 束流效果
        const beamGeo = new THREE.ConeGeometry(0.3, 8, 8);
        const beamMat = new THREE.MeshBasicMaterial({ 
            color: 0xff6b6b, 
            transparent: true, 
            opacity: 0.4 
        });
        const beam = new THREE.Mesh(beamGeo, beamMat);
        beam.position.set(pos.x, pos.y + 2, pos.z);
        beam.rotation.x = pos.angle;
        scene.add(beam);
    });
    
    // 衬底台
    const substrateGeo = new THREE.CylinderGeometry(
        equipmentModels.substrate.radius,
        equipmentModels.substrate.radius,
        equipmentModels.substrate.height,
        32
    );
    const substrateMat = new THREE.MeshPhongMaterial({ 
        color: equipmentModels.substrate.color,
        emissive: 0x003333,
        shininess: 100
    });
    const substrate = new THREE.Mesh(substrateGeo, substrateMat);
    substrate.position.y = 3;
    substrate.castShadow = true;
    scene.add(substrate);
    
    // RHEED 屏幕
    const screenGeo = new THREE.SphereGeometry(10, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3);
    const screenMat = new THREE.MeshPhongMaterial({ 
        color: 0x1a1a2e,
        emissive: 0x001133,
        shininess: 50,
        side: THREE.DoubleSide
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.y = 8;
    scene.add(screen);
}

function createKnowledgeModules() {
    const categoryColors = {
        principle: 0x00d9ff,
        equipment: 0x00ff88,
        process: 0xffcc00,
        materials: 0xff6b9d,
        application: 0x9d4fff,
        advantage: 0x00ffaa
    };
    
    const categoryNames = {
        principle: 'MBE 原理',
        equipment: '设备结构',
        process: '工艺流程',
        materials: '材料体系',
        application: '应用领域',
        advantage: '优势局限'
    };
    
    // 为每个知识点创建 3D 模块
    Object.keys(mbeData).forEach((category, catIdx) => {
        const topics = mbeData[category];
        const radius = 18;
        const angleStep = (Math.PI * 2) / topics.length;
        const startY = (2.5 - catIdx) * 2;
        
        topics.forEach((topic, idx) => {
            // 创建模块几何体 (二十面体)
            const geometry = new THREE.IcosahedronGeometry(1.2, 0);
            const material = new THREE.MeshPhongMaterial({ 
                color: categoryColors[category],
                transparent: true,
                opacity: 0.85,
                shininess: 100,
                emissive: categoryColors[category],
                emissiveIntensity: 0.2
            });
            
            const module = new THREE.Mesh(geometry, material);
            
            // 环形排列
            const angle = idx * angleStep;
            module.position.x = Math.cos(angle) * radius;
            module.position.z = Math.sin(angle) * radius;
            module.position.y = startY;
            
            // 存储数据
            module.userData = {
                ...topic,
                categoryName: categoryNames[category]
            };
            
            module.castShadow = true;
            scene.add(module);
            modules.push(module);
            
            // 添加发光效果
            const glowGeo = new THREE.IcosahedronGeometry(1.4, 0);
            const glowMat = new THREE.MeshBasicMaterial({
                color: categoryColors[category],
                transparent: true,
                opacity: 0.15,
                side: THREE.BackSide
            });
            const glow = new THREE.Mesh(glowGeo, glowMat);
            module.add(glow);
        });
    });
}

function createParticles() {
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 60;
        positions[i + 2] = (Math.random() - 0.5) * 100;
    }
    
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMat = new THREE.PointsMaterial({
        color: 0x00d9ff,
        size: 0.15,
        transparent: true,
        opacity: 0.6
    });
    
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);
}

function setupInteraction() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    renderer.domElement.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(modules);
        
        if (intersects.length > 0) {
            const module = intersects[0].object;
            // 找到实际的模块 (不是 glow)
            const targetModule = module.geometry.type === 'IcosahedronGeometry' ? module : module.parent;
            if (targetModule && targetModule.userData.name) {
                selectModuleObject(targetModule);
            }
        }
    });
    
    // 鼠标拖动旋转
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    renderer.domElement.addEventListener('mousedown', () => isDragging = true);
    renderer.domElement.addEventListener('mouseup', () => isDragging = false);
    renderer.domElement.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const deltaMove = {
                x: event.offsetX - previousMousePosition.x,
                y: event.offsetY - previousMousePosition.y
            };
            
            scene.rotation.y += deltaMove.x * 0.005;
            scene.rotation.x += deltaMove.y * 0.005;
        }
        
        previousMousePosition = { x: event.offsetX, y: event.offsetY };
    });
    
    // 滚轮缩放
    renderer.domElement.addEventListener('wheel', (event) => {
        camera.position.z += event.deltaY * 0.05;
        camera.position.z = Math.max(20, Math.min(60, camera.position.z));
    });
    
    // 触摸支持
    renderer.domElement.addEventListener('touchstart', (event) => {
        if (event.touches.length === 1) {
            isDragging = true;
            previousMousePosition = { 
                x: event.touches[0].clientX, 
                y: event.touches[0].clientY 
            };
        }
    });
    
    renderer.domElement.addEventListener('touchend', () => isDragging = false);
    
    renderer.domElement.addEventListener('touchmove', (event) => {
        if (isDragging && event.touches.length === 1) {
            const deltaMove = {
                x: event.touches[0].clientX - previousMousePosition.x,
                y: event.touches[0].clientY - previousMousePosition.y
            };
            
            scene.rotation.y += deltaMove.x * 0.005;
            scene.rotation.x += deltaMove.y * 0.005;
            
            previousMousePosition = { 
                x: event.touches[0].clientX, 
                y: event.touches[0].clientY 
            };
        }
    });
}

function selectModuleObject(module) {
    // 恢复之前选中的模块
    if (selectedModule) {
        selectedModule.material.opacity = 0.85;
        selectedModule.scale.set(1, 1, 1);
    }
    
    // 高亮选中的模块
    selectedModule = module;
    module.material.opacity = 1;
    module.scale.set(1.3, 1.3, 1.3);
    
    // 显示信息
    showInfo(module.userData);
    
    // 标记为已学习
    if (!learnedTopics.has(module.userData.id)) {
        learnedTopics.add(module.userData.id);
        updateProgress();
    }
}

function showInfo(topic) {
    const infoDiv = document.getElementById('info');
    
    infoDiv.innerHTML = `
        <h3>${topic.name}</h3>
        <p><span class="category">模块：</span>${topic.categoryName}</p>
        ${topic.content}
        <p style="margin-top: 15px; color: #00d9ff; font-size: 13px;">💡 已学习 ${learnedTopics.size} / 32 个知识点</p>
    `;
}

function animate() {
    requestAnimationFrame(animate);
    
    // 模块自转
    modules.forEach((module, index) => {
        module.rotation.y += 0.005;
        module.rotation.x += 0.003;
    });
    
    // 相机缓慢环绕
    const time = Date.now() * 0.0002;
    camera.position.x = Math.sin(time) * 5;
    camera.position.z = Math.cos(time) * 5 + 30;
    camera.lookAt(0, 0, 0);
    
    renderer.render(scene, camera);
}

// 控制函数
function showModule(moduleName) {
    currentModule = moduleName;
    
    modules.forEach(module => {
        if (moduleName === 'all' || module.userData.category === moduleName) {
            module.visible = true;
            module.material.opacity = 0.85;
        } else {
            module.visible = false;
        }
    });
    
    // 重置视角
    camera.position.set(0, 10, 35);
    scene.rotation.set(0, 0, 0);
}

function selectModule(value) {
    if (value === 'all') {
        showModule('all');
    } else {
        showModule(value);
    }
}

function resetView() {
    camera.position.set(0, 10, 35);
    scene.rotation.set(0, 0, 0);
    showModule('all');
    
    if (selectedModule) {
        selectedModule.material.opacity = 0.85;
        selectedModule.scale.set(1, 1, 1);
        selectedModule = null;
    }
    
    // 重置信息显示
    document.getElementById('info').innerHTML = `
        <h3>📖 欢迎学习 MBE 技术</h3>
        <p><span class="highlight">分子束外延 (Molecular Beam Epitaxy)</span> 是一种在单晶衬底上生长高质量单晶薄膜的技术。</p>
        <p><span class="category">🎯 操作说明：</span></p>
        <ul>
            <li>🖱️ <span class="level">点击模块</span> - 查看详细内容</li>
            <li>🔄 <span class="level">拖动旋转</span> - 查看 3D 结构</li>
            <li>🔍 <span class="level">滚轮缩放</span> - 放大/缩小</li>
        </ul>
        <p style="margin-top: 15px; color: #00d9ff; font-size: 14px;">💡 共 6 大模块，32 个核心知识点</p>
    `;
}

function updateProgress() {
    const percentage = (learnedTopics.size / 32) * 100;
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `${learnedTopics.size} / 32 知识点`;
}

// 窗口大小调整
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 初始化
init();
