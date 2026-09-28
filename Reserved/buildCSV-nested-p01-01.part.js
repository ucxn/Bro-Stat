        const csvQ = s => `"${s.replaceAll('"', '""')}"`; // RFC 4180：字段整体加引号，内部双引号翻倍
    const csvE = v => {
      let s = String(v ?? '');
      if (typeof v === 'string' && /^(?:\s*[=+\-@＝＋－＠]|[\t\r\n])/.test(s)) s = "'" + s; // 防表格公式注入
      return csvQ(s);
    };
    const csvRow = a => a.map(csvE).join(',');
    const csvRowT = a => a.map(v => csvQ(String(v ?? ''))).join(','); // 仅限脚本自带可信常量
    return ((sp, now, start) => '\uFEFF' + [
      csvRow([`哥哥科技 硬路由 NPU 增强系列：专用组件 ${版本号} 生成`]),
      csvRow([`统计周期：${new Date(start + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} 至 ${new Date(now + CONFIG.时区补偿).toISOString().replace('T', ' ').slice(0, 19)} (UTC${CONFIG.时区补偿 > 0 ? '+' : ''}${CONFIG.时区补偿 / 3600000})${CONFIG.readSaveData === 1 ? ' （含本地历史读档）' : ''}`]),
      csvRowT(['--- [全局统计] ---']),
      csvRow(['WAN总上传(bit)','WAN总下载(b)','高精全局上行(b)','高精全局下行(b)','LAN积分总上行(b)','LAN积分总下行(b)','本次在线总上行(b)','本次在线总下行(b)']),
      csvRow([Math.round(sp.global?.wan_up||0),Math.round(sp.global?.wan_down||0),Math.round(sp.global?.lan_high_up||0),Math.round(sp.global?.lan_high_down||0),Math.round(sp.global?.lan_integral_up||0),Math.round(sp.global?.lan_integral_down||0),Math.round(sp.global?.lan_off_up||0),Math.round(sp.global?.lan_off_down||0)]),
      '',
      csvRowT(['--- [设备明细] ---']),
      csvRow(['设备名称','MAC地址','IP地址','状态/接口','高精上行','高精下行','积分上行','积分下行','官方上行','官方下行']),
      ...Object.entries(sp.devices || {}).map(d => csvRow([d[1].name,d[0],d[1].ip,d[1].status,Math.round(d[1].up||0),Math.round(d[1].down||0),Math.round(d[1].integral_up||0),Math.round(d[1].integral_down||0),Math.round(d[1].raw_up||0),Math.round(d[1].raw_down||0)])),
            '',
      csvRow(['Bro-Stat@哥哥科技 https://space.bilibili.com/501430041']),
      csvRow(['项目主页: https://github.com/ucxn/Bro-Stat']),
      csvRow(['脚本下载: https://scriptcat.org/users/203510'])
    ].join('\r\n'))(
      S.cSnap || {},
      S.cSnap?.timestamp || Date.now(),
      (CONFIG.readSaveData !== 0 && typeof GM_getValue !== 'undefined' ? GM_getValue('gege_reset_ms', null) : null) || performance.timeOrigin || Date.now()
    );
  }
