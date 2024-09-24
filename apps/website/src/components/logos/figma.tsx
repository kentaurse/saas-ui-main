import { useColorModeValue } from '@chakra-ui/system'
import * as React from 'react'

export const FigmaLogo = (props) => {
  const color = useColorModeValue('black', 'white')
  return (
    <svg viewBox="0 0 164 67" fill={color} {...props}>
      <path d="M60.6981 19V46.1385L64.1885 46.1519V33.2288H72.5789V29.8096H64.1751V22.4058H75.1162V19H60.6981ZM81.3721 24.5192C81.9774 24.5192 82.5579 24.2781 82.9858 23.849C83.4138 23.4198 83.6543 22.8377 83.6543 22.2308C83.6543 21.6238 83.4138 21.0418 82.9858 20.6126C82.5579 20.1834 81.9774 19.9423 81.3721 19.9423C80.7668 19.9423 80.1863 20.1834 79.7583 20.6126C79.3303 21.0418 79.0899 21.6238 79.0899 22.2308C79.0899 22.8377 79.3303 23.4198 79.7583 23.849C80.1863 24.2781 80.7668 24.5192 81.3721 24.5192V24.5192ZM79.6135 27.925V46.1519H83.1039V27.925H79.6135V27.925Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.0049 27.4C91.3868 27.4 88.1649 31.3173 88.1649 35.975C88.1649 40.6327 91.3868 44.55 96.0049 44.55C98.126 44.55 99.8712 43.7423 101.147 42.3961V44.8192C101.155 45.5432 101.021 46.2618 100.751 46.9334C100.482 47.6051 100.082 48.2164 99.5749 48.7322C99.0681 49.2479 98.4643 49.6578 97.7986 49.9381C97.1328 50.2184 96.4182 50.3637 95.6962 50.3654C94.5819 50.3654 93.4811 49.9346 92.6085 49.3154L90.8633 52.3442C92.2127 53.2189 93.7726 53.7122 95.3784 53.772C96.9841 53.8317 98.5762 53.4558 99.9866 52.6839C101.397 51.9119 102.574 50.7726 103.392 49.386C104.211 47.9994 104.641 46.417 104.637 44.8058V27.9385H101.147V29.5673C99.8712 28.2211 98.126 27.4135 96.0049 27.4135V27.4ZM91.6419 35.975C91.6419 33.0808 93.8435 30.8058 96.3942 30.8058C98.9449 30.8058 101.133 33.0942 101.133 35.975C101.133 38.8692 98.9315 41.1308 96.3942 41.1308C93.8435 41.1308 91.6419 38.8692 91.6419 35.975V35.975Z"
      />
      <path d="M117.176 30.8058C116.177 30.8235 115.226 31.2345 114.528 31.9499C113.829 32.6653 113.44 33.6277 113.444 34.6288V46.1519H109.953V27.925H113.444V29.5942C113.966 28.9002 114.644 28.3397 115.423 27.9584C116.202 27.5771 117.06 27.3858 117.927 27.4C120.371 27.4 122.25 28.6115 123.324 30.4692C123.923 29.538 124.743 28.7702 125.711 28.2345C126.678 27.6989 127.763 27.4122 128.868 27.4C132.829 27.4 135.312 30.6038 135.312 34.575V46.1519H131.849V34.6154C131.852 33.6142 131.463 32.6519 130.765 31.9364C130.066 31.221 129.115 30.81 128.117 30.7923C127.118 30.81 126.167 31.221 125.469 31.9364C124.77 32.6519 124.381 33.6142 124.385 34.6154V46.1385H120.894V34.6154C120.898 33.6165 120.51 32.6561 119.815 31.9411C119.119 31.226 118.171 30.8135 117.176 30.7923V30.8058Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M153.879 29.9981C153.086 29.1693 152.133 28.5115 151.078 28.0647C150.023 27.618 148.889 27.3918 147.744 27.4C142.562 27.4 138.883 31.7885 138.883 37.0385C138.883 42.2885 142.562 46.6769 147.744 46.6769C148.888 46.6827 150.022 46.4555 151.077 46.0089C152.131 45.5623 153.085 44.9057 153.879 44.0788V46.1519H157.356V27.925H153.865V29.9981H153.879ZM142.36 37.0385C142.36 33.5654 145.018 30.8058 148.119 30.8058C151.207 30.8058 153.879 33.5654 153.879 37.0385C153.879 40.5115 151.221 43.2577 148.119 43.2577C145.032 43.2577 142.36 40.5115 142.36 37.0385V37.0385Z"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54505 6.54505C7.65483 4.43526 10.5163 3.25 13.5 3.25H32.5C35.4837 3.25 38.3452 4.43526 40.455 6.54505C42.5647 8.65483 43.75 11.5163 43.75 14.5C43.75 17.4837 42.5647 20.3452 40.455 22.455C39.866 23.0439 39.2185 23.5608 38.5261 24C39.2185 24.4392 39.866 24.9561 40.455 25.545C42.5647 27.6548 43.75 30.5163 43.75 33.5C43.75 36.4837 42.5647 39.3452 40.455 41.455C38.3452 43.5647 35.4837 44.75 32.5 44.75C29.6118 44.75 26.8382 43.6394 24.75 41.6548V52.5C24.75 55.4837 23.5647 58.3452 21.455 60.455C19.3452 62.5647 16.4837 63.75 13.5 63.75C10.5163 63.75 7.65483 62.5647 5.54505 60.455C3.43526 58.3452 2.25 55.4837 2.25 52.5C2.25 49.5163 3.43526 46.6548 5.54505 44.545C6.134 43.9561 6.78153 43.4392 7.47394 43C6.78153 42.5608 6.134 42.0439 5.54505 41.455C3.43526 39.3452 2.25 36.4837 2.25 33.5C2.25 30.5163 3.43526 27.6548 5.54505 25.545C6.134 24.9561 6.78153 24.4392 7.47394 24C6.78153 23.5608 6.134 23.0439 5.54505 22.455C3.43526 20.3452 2.25 17.4837 2.25 14.5C2.25 11.5163 3.43526 8.65483 5.54505 6.54505ZM13.5 22.25C11.4446 22.25 9.47333 21.4335 8.01992 19.9801C6.56652 18.5267 5.75 16.5554 5.75 14.5C5.75 12.4446 6.56652 10.4733 8.01992 9.01992C9.47333 7.56652 11.4446 6.75 13.5 6.75H21.25V22.25H13.5ZM21.25 25.75H13.5C11.4446 25.75 9.47333 26.5665 8.01992 28.0199C6.56652 29.4733 5.75 31.4446 5.75 33.5C5.75 35.5554 6.56652 37.5267 8.01992 38.9801C9.47333 40.4335 11.4446 41.25 13.5 41.25H21.25V25.75ZM21.25 44.75H13.5C11.4446 44.75 9.47333 45.5665 8.01992 47.0199C6.56652 48.4733 5.75 50.4446 5.75 52.5C5.75 54.5554 6.56652 56.5267 8.01992 57.9801C9.47333 59.4335 11.4446 60.25 13.5 60.25C15.5554 60.25 17.5267 59.4335 18.9801 57.9801C20.4335 56.5267 21.25 54.5554 21.25 52.5V44.75ZM32.5 22.25H24.75V6.75H32.5C34.5554 6.75 36.5267 7.56652 37.9801 9.01992C39.4335 10.4733 40.25 12.4446 40.25 14.5C40.25 16.5554 39.4335 18.5267 37.9801 19.9801C36.5267 21.4335 34.5554 22.25 32.5 22.25ZM24.75 33.5C24.75 35.5554 25.5665 37.5267 27.0199 38.9801C28.4733 40.4335 30.4446 41.25 32.5 41.25C34.5554 41.25 36.5267 40.4335 37.9801 38.9801C39.4335 37.5267 40.25 35.5554 40.25 33.5C40.25 31.4446 39.4335 29.4733 37.9801 28.0199C36.5267 26.5665 34.5554 25.75 32.5 25.75C30.4446 25.75 28.4733 26.5665 27.0199 28.0199C25.5665 29.4733 24.75 31.4446 24.75 33.5Z"
      />
    </svg>
  )
}
