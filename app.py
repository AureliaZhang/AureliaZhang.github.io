'''import streamlit as st

st.title("PaperPal: Aurelia's AI Coach 🦊")
st.write("Hello Aalto! This is my first Python App. ✨")
st.balloons()  # <--- 这是一个彩蛋，千万别删！
'''

import streamlit as st
import os
import edge_tts
import asyncio
import tempfile

# --- 1. 极简主义配置 (Apple Style) ---
st.set_page_config(page_title="PaperPal", page_icon="🇬🇧", layout="wide")

# CSS 魔法：去除杂质，引入 Apple/Gemini 风格
st.markdown("""
<style>
    /* 全局背景设为极其淡的灰，模拟高档纸张 */
    .stApp {
        background-color: #FAFAFA;
    }
    
    /* 标题样式：Gemini 风格的渐变色 */
    .main-title {
        font-family: 'Helvetica Neue', sans-serif;
        font-size: 3.5rem;
        font-weight: 700;
        background: -webkit-linear-gradient(45deg, #4285F4, #9B72CB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0px;
    }
    
    /* 副标题 */
    .sub-title {
        font-family: 'Helvetica Neue', sans-serif;
        color: #666;
        font-size: 1.2rem;
        margin-bottom: 40px;
    }

    /* 卡片容器：Apple 风格圆角 + 微阴影 */
    .css-1r6slb0, .stTextArea textarea {
        background-color: #FFFFFF;
        border-radius: 12px;
        border: 1px solid #E0E0E0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }
    
    /* 按钮：Apple 风格胶囊按钮 */
    .stButton button {
        border-radius: 20px;
        font-weight: 600;
        border: none;
        transition: all 0.3s;
    }
</style>
""", unsafe_allow_html=True)

# 确保仓库存在
UPLOAD_DIR = "paper_library"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

# --- 2. 极简侧边栏 (The Dock) ---
with st.sidebar:
    st.header("Library")
    
    # 纯净的文件列表
    files = os.listdir(UPLOAD_DIR)
    
    # 上传区 (隐藏式设计)
    with st.expander("➕ Add New Paper"):
        uploaded_file = st.file_uploader("Upload .txt file", type=['txt'])
        if uploaded_file:
            path = os.path.join(UPLOAD_DIR, uploaded_file.name)
            with open(path, "wb") as f:
                f.write(uploaded_file.getbuffer())
            st.success("Added.")
            st.rerun()

    if files:
        selected_filename = st.radio("My Papers", files) # 用 Radio 看起来更像菜单
        
        st.markdown("---")
        # 极简删除键
        if st.button("Delete Selected", type="secondary"):
            os.remove(os.path.join(UPLOAD_DIR, selected_filename))
            st.rerun()
    else:
        selected_filename = None
        st.info("Library is empty.")

# --- 3. 主舞台 (The Stage) ---

# 标题区 (Gemini Style Gradient Text)
st.markdown('<div class="main-title">PaperPal</div>', unsafe_allow_html=True)
st.markdown('<div class="sub-title">Your Private Aalto Reader (London Edition)</div>', unsafe_allow_html=True)

if selected_filename:
    path = os.path.join(UPLOAD_DIR, selected_filename)
    with open(path, "r", encoding='utf-8') as f:
        content = f.read()

    # 左右布局：左文右声
    col1, col2 = st.columns([1.5, 0.8], gap="large")

    with col1:
        st.markdown("##### 📄 Text Content")
        st.text_area("content", value=content, height=500, label_visibility="collapsed")

    with col2:
        st.markdown("##### 🎧 Audio Controller")
        
        # 放在卡片里的控制台
        with st.container(border=True):
            st.caption("Voice Model: **Sonia (Neural GB)**")
            
            # 极简滑块
            speed = st.select_slider("Speaking Rate", options=["-20%", "-10%", "Normal", "+10%"], value="Normal")
            
            # 转换语速参数
            rate_map = {"-20%": "-20%", "-10%": "-10%", "Normal": "+0%", "+10%": "+10%"}
            
            # 这是一个占位符，防止页面跳动
            audio_placeholder = st.empty()
            
            # 播放按钮
            if st.button("▶️ Play Audio", type="primary", use_container_width=True):
                async def speak():
                    # 锁定只用 Sonia (London)
                    communicate = edge_tts.Communicate(content[:800], "en-GB-SoniaNeural", rate=rate_map[speed])
                    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as fp:
                        await communicate.save(fp.name)
                        return fp.name
                
                with st.spinner("Connecting to Neural Network..."):
                    audio_file = asyncio.run(speak())
                    audio_placeholder.audio(audio_file)

else:
    # 空状态：极简灰
    st.markdown("---")
    st.markdown("### Select a document from the sidebar to begin.")