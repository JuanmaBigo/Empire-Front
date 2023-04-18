import React from 'react'
import './cardUser.css'
import Image from '../Image/Image'


export default function CardUser({orders}) {
  return (
    < >
    <div >
        <div className='div-img'>
            <Image className='img' src={'https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2VTa7kthHHe2YwEzsLG3YQBL7AQwADLuqrJS0eAhveJYsADrLwLAZFkZTUpNhqkpK6dYlsfQhfIGfJJhfwypssEsB_vRgQ6ocq1gdZZHX_-NPp7RJOb96__-bP__vi933_r_r16XSfT6fTK9hfv__mx5__8J93H_3t37-a3_3j9DYtQV5fweX7178dJ-41XWbdf3r6DUynt1h49cMhdoh3H0O8-ep0SDpC_LHyz0N_9983p9OnMH10VDudPvlkCW7mwNNXXbjO_rM_FipT3HVG6VrJKtOmzITQoqpzk3Wt0ppz05q6-xxVf2bnaIo-ozK1mdKCcpEXlJVfpja1VJ2_bFtiXrRgYnk9DyUQshmaVvU-AEHMNbEZlj4j7qe6w9ooy8UQW5lpBNhY7IDrb7ognuc-CuJgJkRHfb5roNcMW3RVvAChCgvwEBbGxNkdmRfVbsi8RG4i8c77DqlepH6RE_JJThchSWKnhknqoZwESSclti-vWxYzkonrBzw31SZoOyOsY39IFeobUzdwPtRAuF0EddeuEwdePGYeE5RZjssBNW5AkKjfhdnAYVtzJUgx57EAdD55IBTxMC5IofRYYGtK2x6ZlMFGM1LXgCWttpod6XGoUgfYWysBV08ZsNwaQ3oafYA2D_U9J8NKGEtGdog23f_l-CIXfyWjlzO6ahyfXQ_EtivJBGsuGZkolwFIx_HNGmtcntlGHMS8tNbsw4u8vMho0L9eTcV2pl77ph-oHw633g7icWAVF2C6ptRQ702J9vSBm5QDae0Oba24pD7OfWZpUA51Bx2rS0nDyMJXwHT2NxostwyPuDX6TqOPi-iAVMJlDLF0Z7KshWUg2GYjK1eBDlm3iwcQbmKBS4gZ52QjVyhu41j0BxaLhthlsLYguw_nGQH7et4yctxVNgeskTU5ueF0rptvN0FOsxMO8JlvyBmz4lm6kRukdIHz2QArr0gSdRM0ubQUA5NbpnqQ5LbQIMvEymObE8czpmBS0eBpTobbG4yD8kzTaAvV0HTZRxxkskuzV4SWKg__IFsnyPNa33LyOjYYhqtKHplnnvr5THOX2tbSHKIJLd0WZqwFVl2-ANex8cDSXphCd9V4RaGLuISgbI1uBDy7vAJC1jcUjLnfKcQkNPziWtwkRWa_ZMCS20hRhiYykLDzqMdDmphbOPS2RV_jy5niKH0eAF3oBhhKXEAc10oda7twgE3VA0an61BQnNis0DzXDgF-aNCL6EPMFcXoSgktzqLaKSZVyxwwOeY0pvtRbr2aowBafgf2kB-Z90VgLdm1HHNKc99KATiZlZSCqVRNKc4e45hwUhcprfq2FpQ2l62e0mPO8BLTY89xH6u0GTzXa7xlita0tvudNsH4aOOgt4K27pjmbfQ1pn6LsewlPc4ZPnp0Mz7acfcY8X3U5T4BCd-ftF_HgJ8Z7dPzd2lR4_XDX3iS19APox-ftlGl4Tlrc_E06LEf0nMmGvHEbh74OYVFP3U86cDPX__9r_m3H77-kH8Qonhij7-aNF59fP6WH-4I_N0buPwClxVy38IGAAA.png?viewPort=780,270,insert'} />
        </div>
        <div className='container-card'>
          <div className='div-card'>
            <h2>REVUELTO</h2>
          </div>
          <div className='div-card'>
            <h3>COLOR <p>{}</p></h3>
          </div>
          <div className='div-card'>
            <h3>RIM SELECTION <p>Rims Aesir graphite grey</p></h3>
          </div>
          <div className='div-card'>
            <h3 className='text-h3'>PENDING </h3>
          </div>
        </div>
        </div>
    </>
  )
}
