var monhocArr=[],coursespos=0,inAutoDKMode=!1;if(location.href.includes("dktool")){function MessUpdate(e){alert(e)}function disableSelection(e){void 0!==e.onselectstart?e.onselectstart=function(){return!1}:void 0!==e.style.MozUserSelect?e.style.MozUserSelect="none":e.onmousedown=function(){return!1},e.style.cursor="default"}$(".base > table > tbody > tr")[1].innerHTML=" <td height='500px' valign='top'> <style type='text/css'> #dhtmltooltip{position: absolute; padding: 2px; visibility: hidden; z-index: 100;}.style1{width: 814px;}.style2{width: 68px;}.style3{width: 1252px;}#Select1{height: 66px; width: 238px;}#selectMonHoc1{width: 352px; height: 63px;}</style><div id='dhtmltooltip' style='background-image: url(&quot;App_Themes/Standard/Images/tooltip.png&quot;); text-align: center; left: -1000px; top: 463px; visibility: hidden;'><table cellpadding='0' border='0' cellspacing='0' style='text-align:left;font-size:10pt;font-family:tahoma;background-color:#2E6C92; color:White; '><tbody><tr height='20px'><td align='center'>29/06/2020--05/07/2020</td></tr></tbody></table></div><div id='ctl00_ContentPlaceHolder1_ctl00_UpdatePanel2'> <div id='divfilters' class='filters' visible='false'> <table> <tbody><tr> <td> <div id='ctl00_ContentPlaceHolder1_ctl00_pnlLocMonHoc'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblLocMH' style='display:inline-block;width:110px;'>Lọc Theo Môn Học</span> <input type='text' id='txtMaMH1' onkeypress='txtMaMH1_keypress(event)'> <input type='button' value='Lọc >>' id='btnLocTheoMaMH1' onclick='btnLocTheoMaMH1_click()'> </div></td></tr><tr> <td valign='top'> </td></tr></tbody></table> </div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlThongbao'> </div><table id='pnlDSMonhocDK'> <tbody><tr> <td align='center'> <div align='left'> <table cellspacing='0' cellpadding='0' class='title-table'> <tbody><tr align='center' height='30px'> <td width='50px'><asp:label id='lblG1DK' runat='server'> </asp:label> </td><td width='56px'><asp:label id='lblG1MMH' runat='server'>Mã MH</asp:label></td><td width='170px'><asp:label id='lblG1TMH' runat='server'>Tên môn học </asp:label></td><td width='35px'><asp:label id='lblG1NMM' runat='server'>NMH</asp:label></td><td width='35px'><asp:label id='lblG1TTH' runat='server'>TTH</asp:label></td><td width='25px'><asp:label id='lblG1STC' runat='server'>STC</asp:label></td><td width='35px'><asp:label id='lblG1STCHP' runat='server'>STCHP</asp:label></td><td width='90px'><asp:label id='lblG1MaLop' runat='server'>Mã lớp</asp:label></td><td width='28px'><asp:label id='lblG1SCP' runat='server'>Sĩ số</asp:label></td><td width='28px'><asp:label id='lblG1CL' runat='server'>CL</asp:label></td><td width='20px'><asp:label id='lblG1TH' runat='server'>TH</asp:label></td><td width='35px'><asp:label id='lblG1Thu' runat='server'>Thứ </asp:label></td><td width='40px'><asp:label id='lblG1TBD' runat='server'>Tiết BD</asp:label></td><td width='30px'><asp:label id='lblG1ST' runat='server'>ST</asp:label></td><td width='60px'><asp:label id='lblG1Phong' runat='server'>Phòng</asp:label> </td><td width='100px'><asp:label id='lblG1TenGV' runat='server'>Giảng viên</asp:label> </td><td><asp:label id='lblG1Tuan' runat='server'>Tuần</asp:label></td></tr></tbody></table> </div><div style='height: 320px' class='grid-roll'> <div id='divTDK'></div></div></td></tr></tbody></table> <div id='ctl00_ContentPlaceHolder1_ctl00_pnlDaChon'> <div style='margin-top: 5px;' id='titleDSDK'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblDaChon' class='Label' style='font-size:14px;font-weight:bold;'>DANH SÁCH MÔN HỌC ĐÃ CHỌN</span> <table cellspacing='0' cellpadding='0' class='title-table'><tbody><tr><td colspan='11' align='right' style='background-color:#6699FF;height:5px;'><input type='button' id='btnLuu' value='LƯU CÁC MÔN ĐÃ CHỌN ĐĂNG KÝ &amp; XÓA' onclick='LuuDanhSachDangKy()'> </td><td align='center' style='background-color:#6699FF;height:5px;'> <input type='button' id='bntXoaChon' value='Xóa' onclick='xoaTuDanhSach(this.form.chk_xoa, false)'> </td></tr><tr align='center'> <td style='width: 30px;'><asp:label id='lblG2STT' runat='server'>STT</asp:label></td><td style='display:none'><asp:label id='lblG2MaDK' runat='server'>Regis ID </asp:label></td><td style='width: 56px;'><asp:label id='lblG2MMH' runat='server'>Mã MH </asp:label></td><td style='width: 180px;'><asp:label id='lblG2TMH' runat='server'>Tên môn học </asp:label></td><td style='width: 35px;'><asp:label id='lblG2NMH' runat='server'>NMH </asp:label></td><td style='width: 45px;'><asp:label id='lblG2TTH' runat='server'>TTH </asp:label></td><td style='width: 35px;'><asp:label id='lblG2STC' runat='server'>STC </asp:label></td><td style='width: 35px;'><asp:label id='lblG2STCHP' runat='server'>STCHP </asp:label></td><td style='width: 80px;'><asp:label id='lblG2HP' runat='server'>Học Phí</asp:label></td><td style='width: 80px;'><asp:label id='lblG2MG' runat='server'>Miễn Giảm</asp:label></td><td style='width: 80px;'><asp:label id='lblG2PD' runat='server'>Phải Đóng</asp:label></td><td><asp:label id='lblG2TrangThai' runat='server'>Trạng Thái môn học </asp:label></td><td align='left' style='width:50px;'><input type='checkbox' id='IDchk_all' name='chk_all' onclick='check(this.form.chk_xoa);'></td></tr></tbody></table> </div><div id='divTemp' class='grid-roll' style='height: 240px'> <div id='divKQ'></div></div><br><strong> <span id='ctl00_ContentPlaceHolder1_ctl00_lblNote' class='Label'>Ghi chú: ĐK: đăng ký; Mã MH: mã môn học; NMH: Nhóm môn học; TTH: Tổ thực hành; STC: Số tín chỉ; STCHP: Số tín chỉ học phí; CL: Còn lại; TH: Thực hành</span> </strong> <br></div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlDanhGia'> </div><div id='ctl00_ContentPlaceHolder1_ctl00_pnlNguyenVong'> <br><div id='ctl00_ContentPlaceHolder1_ctl00_pnlNguyenVongSV'> </div><table> <tbody><tr> <td width='530px'> <span id='ctl00_ContentPlaceHolder1_ctl00_lblNguyenVong'>Sinh viên đăng ký vào đây các môn hết chỗ hoặc các môn không được mở</span> <input type='text' id='IDtxtMonNV' name='txtMonNV' style='width: 100px' onkeypress='IDtxtMonNV_keypress(event)' onkeyup='IDtxtMonNV_blur(this)'> </td><td width='200px'> <div id='divToNhomNguyenVong'> </div></td><td align='left'> <input type='button' id='butLuuNV' value='Lưu' '='' onclick='LuuNguyenVong_Click()'> <input type='button' id='btbXemTatCaMNV' value='Xem danh sách đã yêu cầu' onclick='XemMonNV()'> </td></tr></tbody></table> </div></div></td>","undefined"==typeof EduSoft&&(EduSoft={}),void 0===EduSoft.Web&&(EduSoft.Web={}),void 0===EduSoft.Web.UC&&(EduSoft.Web.UC={}),EduSoft.Web.UC.DangKyMonHoc_class=function(){},Object.extend(EduSoft.Web.UC.DangKyMonHoc_class.prototype,Object.extend(new AjaxPro.AjaxClass,{ThayDoiLoaiDK:function(e,t){return this.invoke("ThayDoiLoaiDK",{madk:e,loai:t},this.ThayDoiLoaiDK.getArguments().slice(2))},DangKySelectedChange:function(e,t,o,n,a,l,c,i,d,u,s,r,h,g){return this.invoke("DangKySelectedChange",{check:e,maDK:t,maMH:o,tenMH:n,maNh:a,sotc:l,strSoTCHP:c,ngaythistr:i,tietbd:d,sotiet:u,soTCTichLuyToiThieuMonYeuCau:s,choTrung:r,soTCMinMonYeuCau:h,maKhoiSinhVien:g},this.DangKySelectedChange.getArguments().slice(14))},LuuVaoKetQuaDangKy:function(e,t,o,n,a,l,c,i,d,u,s,r,h,g){return this.invoke("LuuVaoKetQuaDangKy",{isValidCoso:e,isValidTKB:t,maDK:o,maMH:n,sotc:a,tenMH:l,maNh:c,strsoTCHP:i,isCheck:d,oldMaDK:u,strngayThi:s,tietBD:r,soTiet:h,isMHDangKyCungKhoiSV:g},this.LuuVaoKetQuaDangKy.getArguments().slice(14))},XoaKQDKTheoMaDK:function(e){return this.invoke("XoaKQDKTheoMaDK",{danhSachMaDangKy:e},this.XoaKQDKTheoMaDK.getArguments().slice(1))},KiemTraTrungNhom:function(){return this.invoke("KiemTraTrungNhom",{},this.KiemTraTrungNhom.getArguments().slice(0))},LuuDanhSachDangKy:function(){return this.invoke("LuuDanhSachDangKy",{},this.LuuDanhSachDangKy.getArguments().slice(0))},LuuDanhSachDangKy_HopLe:function(e,t){return this.invoke("LuuDanhSachDangKy_HopLe",{isCheckSongHanh:e,ChiaHP:t},this.LuuDanhSachDangKy_HopLe.getArguments().slice(2))},LuuNguyenVong:function(e,t,o,n){return this.invoke("LuuNguyenVong",{maMonHoc:e,maNhom:t,maTo:o,buoi:n},this.LuuNguyenVong.getArguments().slice(4))},ShowTatCaTDK:function(){return this.invoke("ShowTatCaTDK",{},this.ShowTatCaTDK.getArguments().slice(0))},LocTheoMonHoc:function(e){return this.invoke("LocTheoMonHoc",{dkLoc:e},this.LocTheoMonHoc.getArguments().slice(1))},LoadChuongTrinhDaoTaoHeNganh:function(){return this.invoke("LoadChuongTrinhDaoTaoHeNganh",{},this.LoadChuongTrinhDaoTaoHeNganh.getArguments().slice(0))},LoadChuongTrinhDaoTaoKhoiLop:function(){return this.invoke("LoadChuongTrinhDaoTaoKhoiLop",{},this.LoadChuongTrinhDaoTaoKhoiLop.getArguments().slice(0))},LoadDanhSachKhoaLop:function(){return this.invoke("LoadDanhSachKhoaLop",{},this.LoadDanhSachKhoaLop.getArguments().slice(0))},LocTheoMaKhoa:function(e,t,o){return this.invoke("LocTheoMaKhoa",{isKhoa:e,maKhoaLop:t,dk:o},this.LocTheoMaKhoa.getArguments().slice(3))},LocTheoCTDTHeNganh:function(e,t){return this.invoke("LocTheoCTDTHeNganh",{maHDT:e,MaNganh:t},this.LocTheoCTDTHeNganh.getArguments().slice(2))},LocTheoCTDTKhoiLop:function(e){return this.invoke("LocTheoCTDTKhoiLop",{maKhoi:e},this.LocTheoCTDTKhoiLop.getArguments().slice(1))},LocTheoMHTuChon:function(){return this.invoke("LocTheoMHTuChon",{},this.LocTheoMHTuChon.getArguments().slice(0))},ShowDSDaDangKy:function(){return this.invoke("ShowDSDaDangKy",{},this.ShowDSDaDangKy.getArguments().slice(0))},LoadNhomTo:function(e){return this.invoke("LoadNhomTo",{maMH:e},this.LoadNhomTo.getArguments().slice(1))},url:"/ajaxpro/EduSoft.Web.UC.DangKyMonHoc,EduSoft.Web.ashx"})),EduSoft.Web.UC.DangKyMonHoc=new EduSoft.Web.UC.DangKyMonHoc_class;var vuotTC,trungTKBChoPhep,trungTKBKChoPhep,xoaKhongHopLe,confirmXoa,confirmXoaTatCa,nhapDKLoc,serverBusy,hinhThucDongHP,hoiDongHP,trungMonNC,waitingCheck,errorOutOffTime,errorChuyenNganhChinh,errorChuyenNganhChuyenSau,errorCaiThienDiemD,errorCaiThienHocKy,errorMucDoTrungTKB0,errorMucDoTrungTKB1,errorTrungLichThiCam,errorTrungLichThiLuaChon,errorTrungLichThiVuot,textKhongTheXoa,textKhongMoMH,errorGioiHanSTC,errorGioiHanSoTCThayDoi,sumCheck=0,checkflag="false",isProcessing=!1;function EndProcessing_Callback(e){}function toggleSelectRow1(e,t){var o=document.getElementById(e);o.checked=t,o.parentNode.parentNode.style.backgroundColor=t?"#CCCCCC":"White"}function CheckToDelete_CheckedChanged(e){1==e.checked?sumCheck+=1:("true"==checkflag&&(document.getElementById("IDchk_all").checked=!1),sumCheck-=1)}function check(e){checkflag=document.getElementById("IDchk_all").checked.toString();try{if("false"==checkflag&&"chk_xoa"==e.name)e.checked=!1,sumCheck-=1;else if("true"==checkflag&&"chk_xoa"==e.name)e.checked=!0,sumCheck+=1;else if("false"==checkflag)for(i=0;i<e.length;i++)e[i].checked=!1,sumCheck-=1;else for(i=0;i<e.length;i++)e[i].checked=!0,sumCheck+=1}catch(e){}}function xoaTuDanhSach(e,t){if(checkflag=document.getElementById("IDchk_all").checked.toString(),0==sumCheck)return alert(xoaKhongHopLe),document.getElementById("IDchk_all").checked=!1,!1;var o=confirmXoa;if("true"==checkflag&&(o=confirmXoaTatCa),t||confirm(o)){document.body.style.cursor="wait";var n="",a="";if("chk_xoa"==e.name&&1==e.checked)toggleSelectRow1(e.id,!1),sumCheck-=1,a=a+","+e.id.substr(4);else for(i=0;i<e.length;i++)1==e[i].checked&&(toggleSelectRow1(e[i].id,!1),sumCheck-=1,a=a+","+e[i].id.substr(4));""!=n&&(n="Rút môn học: "+n.substr(1,n.length-1)+"\n"),n+="Đồng ý?",!t||confirm(n)?EduSoft.Web.UC.DangKyMonHoc.XoaKQDKTheoMaDK(a,XoaKQDKTheoMaDK_CallBack):document.body.style.cursor="default"}return!1}function XoaKQDKTheoMaDK_CallBack(e){var t=e.value;if("1"==t)return document.body.style.cursor="default",window.location="default.aspx?page=dkmonhoc",!1;if("0"==t)return alert(textKhongTheXoa),document.body.style.cursor="default",!1;var o=t.split("MonXoaKem")[1];if("1"==o)alert(errorGioiHanSoTCThayDoi);else if(o)for(var n=o.split("|"),a=0;a<n.length;a++)toggleSelectRow(n[a],!1);var l=t.split("MonXoaKem")[0];l.length>23?(e.value=l.substring(19,t.length-6),document.getElementById("divKQ").innerHTML=e.value):document.getElementById("divKQ").innerHTML="",document.getElementById("IDchk_all").checked=!1,document.body.style.cursor="default"}function deselectAll(){for(var e=document.getElementsByTagName("input"),t=0;t<e.length;t++){if("checkbox"==e[t].type&&e[t].checked&&0==e[t].disabled)toggleSelectRow(e[t].id.split("_")[1],!1)}}function LuuNguyenVong_Click(){var e=document.getElementById("IDtxtMonNV").value,t="0",o="",n="";if(document.getElementById("selectToNhom")){var a=document.getElementById("selectToNhom"),l=a.options[a.selectedIndex].value.split("|");l.length>0&&(o=l[0]),l.length>1&&(n=l[1])}if(document.getElementById("selectBuoi")){var c=document.getElementById("selectBuoi");t=c.options[c.selectedIndex].value}EduSoft.Web.UC.DangKyMonHoc.LuuNguyenVong(e,o,n,t,LuuNguyenVong_callback)}function LuuNguyenVong_callback(e){alert(e.value)}function getValue(e){myVariable=e,alert(myVariable)}function btnLocTheoMaMH1_click(){var e=document.getElementById("txtMaMH1");if(""==e.value)return alert(nhapDKLoc),!1;document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMonHoc(e.value,ShowTatCaTDK_callback)}function selectDKLoc_change(){var e=document.getElementById("selectDKLoc"),t=e.options[e.selectedIndex],o=document.getElementById("divKhoa"),n=document.getElementById("divLop"),a=document.getElementById("divNganh");"khoa"==t.value?null!=o&&(o.style.display="block",n.style.display="none",a.style.display="none"):"lop"==t.value?null!=o&&(o.style.display="none",n.style.display="block",a.style.display="none"):"nganh"==t.value&&null!=o&&(o.style.display="none",a.style.display="block",n.style.display="none")}var mondphoc=0;function LoadDSKhoaLop_load(e){var t=e;""!=e&&(t=e.split("|"),vuotTC=t[5],trungTKBChoPhep=t[6],trungTKBKChoPhep=t[7],xoaKhongHopLe=t[8],confirmXoa=t[9],confirmXoaTatCa=t[10],nhapDKLoc=t[11],serverBusy=t[12],hinhThucDongHP=t[13],hoiDongHP=t[14],trungMonNC=t[15],waitingCheck=t[16],errorOutOffTime=t[17],errorChuyenNganhChinh=t[18],errorChuyenNganhChuyenSau=t[19],errorCaiThienDiemD="Môn học cải thiện không thỏa quy chế",errorCaiThienHocKy=t[21],errorMucDoTrungTKB0=t[22],errorMucDoTrungTKB1=t[23],errorTrungLichThiCam=t[24],errorTrungLichThiLuaChon=t[25],errorTrungLichThiVuot=t[26],textKhongTheXoa=t[27],textKhongMoMH=t[28],errorGioiHanSTC=t[29],errorGioiHanSoTCThayDoi=t[30]),mondphoc=t[31];var o=document.getElementById("divKhoa"),n=document.getElementById("divNganh");1==mondphoc?EduSoft.Web.UC.DangKyMonHoc.LoadChuongTrinhDaoTaoHeNganh(LoadDanhSachKhoaLop_callback):2==mondphoc?EduSoft.Web.UC.DangKyMonHoc.LoadChuongTrinhDaoTaoKhoiLop(LoadDanhSachKhoaLop_callback):(null!=o&&(o.style.display="none",n.style.display="none"),EduSoft.Web.UC.DangKyMonHoc.LoadDanhSachKhoaLop(LoadDanhSachKhoaLop_callback))}function LoadDanhSachKhoaLop_callback(e){if(null!=e)if(e.value&&e.value.length>8&&"BCVTVTHN"==e.value.substring(0,8))e=e.value.replace("BCVTVTHN",""),null!=document.getElementById("divMonHoc")&&(document.getElementById("divMonHoc").innerHTML=e,document.getElementById("divfilters").style.height="180px");else if(0==mondphoc||3==mondphoc||5==mondphoc||6==mondphoc){var t=e.value.split("|||||");if(null!=document.getElementById("divKhoa")&&(document.getElementById("divKhoa").innerHTML=t[0]),null!=document.getElementById("divLop")&&(document.getElementById("divLop").innerHTML=t[1]),t[2]){var o=t[2].split("|");document.getElementById("btnLocTheoMaMH1").value=o[0];var n=document.getElementById("btnKhoa");null!=n&&(n.value=o[1]);var a=document.getElementById("btnLop");if(null!=a&&(a.value=o[1]),document.getElementById("btnLuu").value=o[2],document.getElementById("bntXoaChon").value=o[3],null!=document.getElementById("butLuuNV"))document.getElementById("butLuuNV").value=o[4]}null!=document.getElementById("divDanhSachDieuKienLoc")&&(document.getElementById("divDanhSachDieuKienLoc").innerHTML=t[3],selectDKLoc_change()),null!=document.getElementById("divNganh")&&(document.getElementById("divNganh").innerHTML=t[4])}else if(1==mondphoc){t=e.value.split("|||||");document.getElementById("divLTCTHN1").innerHTML=t[0],document.getElementById("divLTCTHN2").innerHTML=t[1]}else 2==mondphoc&&(document.getElementById("divLTCTKhoi").innerHTML=e.value)}function selectMonHoc_changed(){var e=document.getElementById("selectMonHoc"),t=e.options[e.selectedIndex];t.value&&(document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMonHoc(t.value,ShowTatCaTDK_callback))}function selectKhoa_changed(){var e=document.getElementById("selectKhoa"),t=e.options[e.selectedIndex];""!=t.value&&(document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(!0,t.value,"",ShowTatCaTDK_callback))}function selectLop_changed(){document.body.style.cursor="wait";var e=document.getElementById("selectLop"),t=e.options[e.selectedIndex];EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(!1,t.value,"",ShowTatCaTDK_callback)}function btnXemTatCaTDK_click(){document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.ShowTatCaTDK(ShowTatCaTDK_callback)}function btnLop_click(){var e=document.getElementById("txtLop");if(""==e.value)return alert(nhapDKLoc),!1;var t=document.getElementById("selectKhoa"),o=t.options[t.selectedIndex],n="";"visible"==o.visibility&&(n=o.value),document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(!1,n,e.value,ShowTatCaTDK_callback)}function btnKhoa_click(){var e=document.getElementById("txtKhoa");if(""==e.value)return alert(nhapDKLoc),!1;var t=document.getElementById("selectKhoa"),o=t.options[t.selectedIndex],n="";"visible"==o.visibility&&(n=o.value),document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(!0,n,e.value,ShowTatCaTDK_callback)}function LuuDanhSachDangKy(){document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.KiemTraTrungNhom(KiemTraTrungNhom_callback)}function KiemTraTrungNhom_callback(e){if(""!=e.value)return alert(e.value),document.body.style.cursor="default",!1;EduSoft.Web.UC.DangKyMonHoc.LuuDanhSachDangKy(LuuDanhSachDangKy_callback)}function txtMaMH1_keypress(e){13==(window.Event?e.which:e.keyCode)&&(document.body.style.cursor="wait",btnLocTheoMaMH1_click())}function txtLop_keypress(e){13==(window.Event?e.which:e.keyCode)&&(document.body.style.cursor="wait",btnLop_click())}function txtKhoa_keypress(e){13==(window.Event?e.which:e.keyCode)&&(document.body.style.cursor="wait",btnKhoa_click())}function IDtxtMonNV_keypress(e){13==(window.Event?e.which:e.keyCode)&&null!=document.getElementById("butLuuNV")&&LuuNguyenVong_Click()}function IDtxtMonNV_blur(e){var t=e.value;t&&EduSoft.Web.UC.DangKyMonHoc.LoadNhomTo(t,IDtxtMonNV_blur_callback)}function IDtxtMonNV_blur_callback(e){null!=e&&null!=document.getElementById("divToNhomNguyenVong")&&(document.getElementById("divToNhomNguyenVong").innerHTML=e.value)}function selectCTDTKL_changed(){var e=document.getElementById("selectCTDTKL"),t=e.options[e.selectedIndex];""!=t.value&&(document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoCTDTKhoiLop(t.value,ShowTatCaTDK_callback))}function LocTheoMonTuChon(){document.getElementById("selectCTDTKL");document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMHTuChon(ShowTatCaTDK_callback)}function LocMonChuaHoc(){document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoCTDTHeNganh(null,null,ShowTatCaTDK_callback)}function LocMonHoclai(){document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoMonHoclai(null,null,ShowTatCaTDK_callback)}function selectCTDTHN2_changed(){var e=document.getElementById("selectCTDTHN1"),t=document.getElementById("selectCTDTHN2"),o=null!=e?e.options[e.selectedIndex]:"",n=null!=t?t.options[t.selectedIndex]:"";""!=n.value&&(document.body.style.cursor="wait",EduSoft.Web.UC.DangKyMonHoc.LocTheoCTDTHeNganh(o.value,n.value,ShowTatCaTDK_callback))}function LoadKhongHopLe(e){alert(e),self.location="Default.aspx?page=dangnhap"}function XemMonNV(){self.location="Default.aspx?page=monnguyenvong"}function changeLoaiDK(e){var t=e.id.substring(2);EduSoft.Web.UC.DangKyMonHoc.ThayDoiLoaiDK(t,e.value,changeLoaiDK_Callback)}function changeLoaiDK_Callback(e){1==e.value&&location.reload()}function setDefLoaiDK(e,t){e>0&&(t.selectedIndex=e-1)}window.open("default.aspx?page=dkmonhoc","_blank")}function toDKSelectedChange_callback2(e){var t=e.value.split("|");""!=t[1]&&toastr.info(t[1]),document.getElementById("divKQ").innerHTML=t[0],document.body.disabled="",document.body.style.cursor="default",isProcessing=!1,toastr.success("Đã chọn môn học thứ "+(coursespos+1)),inAutoDKMode&&(coursespos++,fastDKOSB())}function LuuDanhSachDangKy_HopLe_callback(e){var t=e.value.split("||");if(document.body.style.cursor="default",1==t.length)return toastr.info(t[0]),EduSoft.Web.UC.DangKyMonHoc.ShowDSDaDangKy(ShowDSDaDangKy_Callback),!1;if(""!=t[0]&&null!=t[0]){if("false"==t[0])return!1;toastr.info(t[0])}t[0].includes("Ngoài thời gian")||t[0].includes("Beside allowed time of course registration!")||t[0].includes("outOfTimeDK")||(EduSoft.Web.UC.DangKyMonHoc.ShowDSDaDangKy(ShowDSDaDangKy_Callback),toastr.success("Đã lưu kết quả! Hãy xem lại danh sách"))}function ShowDSDaDangKy_Callback(e){if(document.getElementById("divKQ").innerHTML=e.value,document.body.style.cursor="default",gamMonMode){let e=!0;for(let t=0;t<monhocArr.length;t++){let o=monhocArr[t].split("|")[1];if(!$("#divKQ")[0].outerHTML.includes(o)){e=!1;break}}e?(toastr.success("Đã găm thành công tất cả các môn ok"),$("#autoGam").click()):setTimeout(fastDK,timeAuto)}else location.href="#divKQ";return!1}function LuuDanhSachDangKy_callback(e){EduSoft.Web.UC.DangKyMonHoc.LuuDanhSachDangKy_HopLe(!0,!1,LuuDanhSachDangKy_HopLe_callback)}function toggleSelectRow(e,t){try{var o=document.getElementById("chk_"+e);o.checked=t,o.parentNode.parentNode.style.backgroundColor=t?"#CCCCCC":"White"}catch(e){}}function toDKSelectedChange_callback(e){if(""==e.value)window.open("default.aspx?page=dkmonhoc","_blank");else{var t=!1,o=!1,n=e.value.split("|"),a=n[1];if(2==n.length)toastr.info(n[0]),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else{var l=1==n[2],c=n[4],i=n[5],d=n[34],u=n[35],s=n[6],r=n[7],h=n[8],g=(n[28],n[29]),m=n[30],y=n[31],b=n[32],p=n[33],T=n[36],f=n[38];if("dhmxhetx"==n[0])confirm("Môn học học trực tuyến, tiếp tục đăng ký?")&&(o=!0,toggleSelectRow(a,l),c&&toggleSelectRow(c,!1),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2));else if(1==i)toastr.error(vuotTC),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(1==d)toastr.error("Vượt số tín chỉ tối đa ngoài ngành cho phép!"),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(0==m)toastr.error(errorChuyenNganhChinh),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(0==y)toastr.error(errorChuyenNganhChuyenSau),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(0==b)toastr.error(errorGioiHanSTC+a),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(0==p)toastr.error(errorGioiHanSoTCThayDoi),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(0==T)toastr.error("Không được đăng ký môn học thuộc nhóm tự chọn khác nhóm "+n[37].toString()),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(1==n[21]&&0==n[22]){var D="0"==n[23]?errorCaiThienDiemD:errorCaiThienHocKy+n[23];toastr.error(D),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1}else if(g)toastr.error(g),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(h)toastr.error(h),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if(s)confirm(s+" bấm OK để đăng ký hoặc hủy để bỏ qua môn này")?(toggleSelectRow(a,!0),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2)):(toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1);else if(""!=f)confirm(f)?(toggleSelectRow(a,!0),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2)):(toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1);else if(1==n[9]){if(1==n[17]||3==n[17])K=3==n[17]?errorMucDoTrungTKB0+n[19]+", "+n[20]+"% "+errorMucDoTrungTKB1:trungTKBChoPhep,confirm(K)?(o=!0,toggleSelectRow(a,!0),c&&toggleSelectRow(c,!1),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2)):(toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1);else toastr.error(trungTKBKChoPhep),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1}else if(n[10])n[11]?confirm(n[10])?(t=!0,toggleSelectRow(a,!0),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2)):(toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1):"1"==n[11]&&(toggleSelectRow(a,!1),toastr.error(n[10]),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1);else if(""!=n[24])if("khongchotrung"==n[24])toastr.error(errorTrungLichThiCam),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else if("choluachon"==n[24]){var K=errorTrungLichThiLuaChon;confirm(K)?(toggleSelectRow(a,!0),c&&toggleSelectRow(c,!1),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2)):(toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1)}else toastr.error(errorTrungLichThiVuot+n[24]),toggleSelectRow(a,!1),document.body.disabled="",document.body.style.cursor="default",isProcessing=!1;else 0==n[0]?(r&&toastr.error(r),toggleSelectRow(a,l),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2)):(toggleSelectRow(a,!0),toggleSelectRow(c,!1),EduSoft.Web.UC.DangKyMonHoc.LuuVaoKetQuaDangKy(t,o,n[1],n[12],n[13],n[14],n[15],n[16],l.toString(),c,n[25],n[26],n[27],u,toDKSelectedChange_callback2))}}}function toDKSelectedChange(e){document.body.disabled="false",document.getElementById("IDchk_all").checked=!1;var t=e.value.split("|");EduSoft.Web.UC.DangKyMonHoc.DangKySelectedChange(!0,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],toDKSelectedChange_callback)}function ShowTatCaTDK_callback(e){try{document.body.style.cursor="default",document.getElementById("divTDK").innerHTML=null==e?textKhongMoMH:e.value,document.getElementById("txtMaMH1").value="";var t=document.getElementById("txtKhoa");null!=t&&(t.value="");var o=document.getElementById("txtLop");null!=o&&(o.value="")}catch(e){}appendGuiAutoDK()}function appendGuiAutoDK(){try{if($("#pnlDSMonhocDK")[0]&&($("table.title-table")[0].getElementsByTagName("tbody")[0].childNodes[0].getElementsByTagName("td")[0].setAttribute("width","50px"),null==$("#AUTODK")[0]&&$("#pnlDSMonhocDK").append('<div style="margin-top: 5px"><div><span class="d-block p-2 bg-success text-white" id="AUTODK" style="font-size:14px;font-weight:bold;">AUTO ĐĂNG KÍ</span></div><div><span style="width:110px;margin-left:5px;font-size:15px">Điền Value môn học:</span></div><div><textarea class="form-control" placeholder="Nhập vào đây value của các môn học, mỗi môn một dòng" style="margin-left:5px; width: 600px; height: 100px; resize: both;font-size:12px" id="subject" rows="4"></textarea></div> <div style="margin-left:5px;margin-top:5px"> <input type="checkbox" id="tudongluudk" checked=""> <label>Tự động lưu kết quả khi chọn xong tất cả các môn</label> </div><div style="margin-left:5px;margin-top:2px"><button type="button" class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để chọn môn nhanh" id="btndangkymon" onclick="fastDK()">Chọn môn</button><button type="button" class="btn btn-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để lưu kết quả đăng kí" id="btnluumon" onclick="LuuDanhSachDangKy()" style="margin-left:5px">Lưu kết quả</button></div> <div style="margin-left:5px;margin-top:2px"><button type="button" class="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="top" title="Bấm để găm môn" id="autoGam" onclick="autoGamMon()">Auto Găm</button> <span>sau mỗi</span>&nbsp;<input type="number" id="timeAuto" name="timeAuto" min="1" step="1" value="1" style="border-color: initial;max-width: 48px;text-align: center;">&nbsp;<span>giây</span><a></a></div><div style="margin-top:2px;margin-left:5px;font-size:14px">Hướng dẫn: Nhấn nút copy trước môn học cần đăng kí để sao chép value môn học rồi dán vào ô Điền Value môn học mỗi môn một dòng sau đó nhấn chọn môn để tool tự động chọn môn, kiểm tra danh sách môn đã chọn đã cập nhật hết số môn chưa, nếu rồi thì nhấn nút lưu để chọn môn. Tính năng găm môn giúp liên tục "găm" các môn đã hết slot, tool sẽ giúp "đớp" ngay khi môn có slot còn trống (có người nhả môn hoặc môn được tăng slot).</div><div><span style="margin-left:5px;font-size:14px">Cần hỗ trợ liên hệ hãy vào group hỗ trợ </span><a style="font-size:14px" href="https://www.facebook.com/groups/165556974833741/" target="_blank">tại đây</a></div></div>'),0==document.getElementsByClassName("btnCopyValuethis").length)){$("input").each(function(){$(this).attr("disabled")&&$(this).removeAttr("disabled")});var e,t=$("#divTDK")[0].querySelectorAll("input[type=checkbox]");for(e=0;e<t.length;e++){var o=document.createElement("input");o.setAttribute("onclick","copyValueThis(this)"),o.setAttribute("class","btn btn-primary btn-sm btnCopyValuethis"),o.setAttribute("style","margin-top:2px"),o.setAttribute("type","button"),o.setAttribute("value","Copy"),t[e].parentNode.append(o)}}}catch(e){}}function copyValueThis(e){try{let t=document.createElement("textarea"),o=e.parentNode.firstChild;t.value=o.value,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.remove(),toastr.success("Đã copy giá trị môn học")}catch(e){}}window.alert=function(e){return toastr.info(e),e.includes("Server đang tải lại dữ liệu")&&setTimeout(function(){location.reload()},500),!0};var gamMonMode=!1,timeAuto=1e3;function autoGamMon(){$("#tudongluudk")[0].checked=!0,gamMonMode?(gamMonMode=!1,$("#autoGam").attr("class","btn btn-primary btn-sm"),$("#autoGam").html("Auto Găm")):(timeAuto=1e3*$("#timeAuto").val(),gamMonMode=!0,$("#autoGam").attr("class","btn btn-danger btn-sm"),$("#autoGam").html("Stop"),toastr.success("Bắt đầu tự động găm môn"),fastDK())}function fastDK(){dsmonhoc=$("#subject").val(),0!=dsmonhoc.trim().length?(coursespos=0,monhocArr=dsmonhoc.split("\n"),inAutoDKMode=!0,fastDKOSB()):toastr.error("Danh sách môn trống")}function fastDKOSB(){if(coursespos<monhocArr.length){let e=monhocArr[coursespos],t=e.split("|")[1];if($("#divKQ")[0].outerHTML.includes(t))toastr.info("Bỏ qua môn thứ "+(coursespos+1)),coursespos++,fastDKOSB();else{let t=e.split("|");EduSoft.Web.UC.DangKyMonHoc.DangKySelectedChange(!0,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],toDKSelectedChange_callback)}}else inAutoDKMode=!1,1==$("#tudongluudk")[0].checked?(toastr.success("Đang lưu danh sách môn học"),LuuDanhSachDangKy()):toastr.success("Đã chọn tất cả các môn! Bấm lưu đăng kí thật nhanh nào!")}document.title.includes("Failed to load viewstate")&&window.open("Default.aspx?page=dangnhap","_self"),appendGuiAutoDK();