const palette = {
  color1: {
    bg: { hex: '#1E1E1E', rgba: 'rgba(30, 30, 30, 1)', rgb: 'rgb(30, 30, 30)' },
    c1: { hex: '#569CD6', rgba: 'rgba(86, 156, 214, 1)', rgb: 'rgb(86, 156, 214)' },
    c2: { hex: '#9CDCFE', rgba: 'rgba(156, 220, 254, 1)', rgb: 'rgb(156, 220, 254)' },
    c3: { hex: '#D4D4D4', rgba: 'rgba(212, 212, 212, 1)', rgb: 'rgb(212, 212, 212)' },
    c4: { hex: '#DCDCAA', rgba: 'rgba(220, 220, 170, 1)', rgb: 'rgb(220, 220, 170)' },
    c5: { hex: '#DA70D6', rgba: 'rgba(218, 112, 214, 1)', rgb: 'rgb(218, 112, 214)' },
    c6: { hex: '#CE9178', rgba: 'rgba(206, 145, 120, 1)', rgb: 'rgb(206, 145, 120)' },
  },
  color2: {
    bg: { hex: '#242636', rgba: 'rgba(36, 38, 54, 1)', rgb: 'rgb(36, 38, 54)' },
    c1: { hex: '#ECC503', rgba: 'rgba(236, 197, 3, 1)', rgb: 'rgb(236, 197, 3)' },
    c2: { hex: '#68A1D9', rgba: 'rgba(104, 161, 217, 1)', rgb: 'rgb(104, 161, 217)' },
    c3: { hex: '#F8F7FC', rgba: 'rgba(248, 247, 252, 1)', rgb: 'rgb(248, 247, 252)' },
    c4: { hex: '#6AB440', rgba: 'rgba(106, 180, 64, 1)', rgb: 'rgb(106, 180, 64)' },
    c5: { hex: '#BEBEBC', rgba: 'rgba(190, 190, 188, 1)', rgb: 'rgb(190, 190, 188)' },
    c6: { hex: '#F15F28', rgba: 'rgba(241, 95, 40, 1)', rgb: 'rgb(241, 95, 40)' },
  },
  color3: {
    bg: { hex: '#333333', rgba: 'rgba(51, 51, 51, 1)', rgb: 'rgb(51, 51, 51)' },
    c1: { hex: '#D36D77', rgba: 'rgba(211, 109, 119, 1)', rgb: 'rgb(211, 109, 119)' },
    c2: { hex: '#EEBC72', rgba: 'rgba(238, 188, 114, 1)', rgb: 'rgb(238, 188, 114)' },
    c3: { hex: '#C5CFCA', rgba: 'rgba(197, 207, 202, 1)', rgb: 'rgb(197, 207, 202)' },
    c4: { hex: '#BFBA6A', rgba: 'rgba(191, 186, 106, 1)', rgb: 'rgb(191, 186, 106)' },
    c5: { hex: '#D36E73', rgba: 'rgba(211, 110, 115, 1)', rgb: 'rgb(211, 110, 115)' },
    c6: { hex: '#B997BE', rgba: 'rgba(185, 151, 190, 1)', rgb: 'rgb(185, 151, 190)' },
  },
  color4: {
    bg: { hex: '#002451', rgba: 'rgba(0, 36, 81, 1)', rgb: 'rgb(0, 36, 81)' },
    c1: { hex: '#7285B7', rgba: 'rgba(114, 133, 183, 1)', rgb: 'rgb(114, 133, 183)' },
    c2: { hex: '#FF9DA4', rgba: 'rgba(255, 157, 164, 1)', rgb: 'rgb(255, 157, 164)' },
    c3: { hex: '#477196', rgba: 'rgba(71, 113, 150, 1)', rgb: 'rgb(71, 113, 150)' },
    c4: { hex: '#98B8DE', rgba: 'rgba(152, 184, 222, 1)', rgb: 'rgb(152, 184, 222)' },
    c5: { hex: '#FFD700', rgba: 'rgba(255, 215, 0, 1)', rgb: 'rgb(255, 215, 0)' },
    c6: { hex: '#D1F1A9', rgba: 'rgba(209, 241, 169, 1)', rgb: 'rgb(209, 241, 169)' },
  },
  color5: {
    bg: { hex: '#221A0F', rgba: 'rgba(34, 26, 15, 1)', rgb: 'rgb(34, 26, 15)' },
    c1: { hex: '#DC3958', rgba: 'rgba(220, 57, 88, 1)', rgb: 'rgb(220, 57, 88)' },
    c2: { hex: '#D3AF86', rgba: 'rgba(211, 175, 134, 1)', rgb: 'rgb(211, 175, 134)' },
    c3: { hex: '#957B5C', rgba: 'rgba(149, 123, 92, 1)', rgb: 'rgb(149, 123, 92)' },
    c4: { hex: '#6F8A86', rgba: 'rgba(111, 138, 134, 1)', rgb: 'rgb(111, 138, 134)' },
    c5: { hex: '#FFD700', rgba: 'rgba(255, 215, 0, 1)', rgb: 'rgb(255, 215, 0)' },
    c6: { hex: '#889B4A', rgba: 'rgba(136, 155, 74, 1)', rgb: 'rgb(136, 155, 74)' },
  },
  color6: {
    bg: { hex: '#000C18', rgba: 'rgba(0, 12, 24, 1)', rgb: 'rgb(0, 12, 24)' },
    c1: { hex: '#225588', rgba: 'rgba(34, 85, 136, 1)', rgb: 'rgb(34, 85, 136)' },
    c2: { hex: '#D3AF86', rgba: 'rgba(211, 175, 134, 1)', rgb: 'rgb(211, 175, 134)' },
    c3: { hex: '#384887', rgba: 'rgba(56, 72, 135, 1)', rgb: 'rgb(56, 72, 135)' },
    c4: { hex: '#D8B785', rgba: 'rgba(216, 183, 133, 1)', rgb: 'rgb(216, 183, 133)' },
    c5: { hex: '#FFD700', rgba: 'rgba(255, 215, 0, 1)', rgb: 'rgb(255, 215, 0)' },
    c6: { hex: '#20A342', rgba: 'rgba(32, 163, 66, 1)', rgb: 'rgb(32, 163, 66)' },
  },
  color7: {
    bg: { hex: '#F5F5F5', rgba: 'rgba(245, 245, 245, 1)', rgb: 'rgb(245, 245, 245)' },
    c1: { hex: '#4B69C6', rgba: 'rgba(75, 105, 198, 1)', rgb: 'rgb(75, 105, 198)' },
    c2: { hex: '#7A3E9D', rgba: 'rgba(122, 62, 157, 1)', rgb: 'rgb(122, 62, 157)' },
    c3: { hex: '#91B3E0', rgba: 'rgba(145, 179, 224, 1)', rgb: 'rgb(145, 179, 224)' },
    c4: { hex: '#AA3731', rgba: 'rgba(170, 55, 49, 1)', rgb: 'rgb(170, 55, 49)' },
    c5: { hex: '#FFD700', rgba: 'rgba(255, 215, 0, 1)', rgb: 'rgb(255, 215, 0)' },
    c6: { hex: '#4A8F2D', rgba: 'rgba(74, 143, 45, 1)', rgb: 'rgb(74, 143, 45)' },
  },
  color8: {
    bg: { hex: '#FCF6E5', rgba: 'rgba(252, 246, 229, 1)', rgb: 'rgb(252, 246, 229)' },
    c1: { hex: '#4689CC', rgba: 'rgba(70, 137, 204, 1)', rgb: 'rgb(70, 137, 204)' },
    c2: { hex: '#697A82', rgba: 'rgba(105, 122, 130, 1)', rgb: 'rgb(105, 122, 130)' },
    c3: { hex: '#97A2A2', rgba: 'rgba(151, 162, 162, 1)', rgb: 'rgb(151, 162, 162)' },
    c4: { hex: '#AE8B2D', rgba: 'rgba(174, 139, 45, 1)', rgb: 'rgb(174, 139, 45)' },
    c5: { hex: '#66C34F', rgba: 'rgba(102, 195, 79, 1)', rgb: 'rgb(102, 195, 79)' },
    c6: { hex: '#4A8F2D', rgba: 'rgba(74, 143, 45, 1)', rgb: 'rgb(74, 143, 45)' },
  },
  color9: {
    bg: { hex: '#F9F9F9', rgba: 'rgba(249, 249, 249, 1)', rgb: 'rgb(249, 249, 249)' },
    c1: { hex: '#4F7E7E', rgba: 'rgba(79, 126, 126, 1)', rgb: 'rgb(79, 126, 126)' },
    c2: { hex: '#6364AC', rgba: 'rgba(99, 100, 172, 1)', rgb: 'rgb(99, 100, 172)' },
    c3: { hex: '#422B4C', rgba: 'rgba(66, 43, 76, 1)', rgb: 'rgb(66, 43, 76)' },
    c4: { hex: '#A1A1A1', rgba: 'rgba(161, 161, 161, 1)', rgb: 'rgb(161, 161, 161)' },
    c5: { hex: '#377EF7', rgba: 'rgba(55, 126, 247, 1)', rgb: 'rgb(55, 126, 247)' },
    c6: { hex: '#377EF7', rgba: 'rgba(234, 64, 37, 1)', rgb: 'rgb(234, 64, 37)' },
  }
}
