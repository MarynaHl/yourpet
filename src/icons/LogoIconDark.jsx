import * as React from 'react';

export default function LogoIconDark({ isMobile }) {
  return (
    <svg
      width={isMobile ? 116 : 162}
      height={isMobile ? 20 : 28}
      viewBox="0 0 162 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <desc>Your pet logo</desc>
      <path
        d="M3.344 25.688C1.51 25.438.396 24.468 0 22.78l.031-.343.281-.844c.105-.354.22-.698.344-1.032.125-.354.334-.666.625-.937.063-.188.177-.469.344-.844.188-.396.49-.979.906-1.75.334-.604.594-1.083.781-1.437.209-.354.376-.625.5-.813-.208-.375-.5-.74-.874-1.094a27.742 27.742 0 01-.876-1.78 15.485 15.485 0 01-.53-1.563c-.022-.5-.105-1.01-.25-1.531L1.093 8A3.74 3.74 0 011 7.156a2.438 2.438 0 01-.219-.562l.063-.375c.104-.167.125-.386.062-.657a6.56 6.56 0 00-.187-.875c-.063-.27-.125-.552-.188-.843A4.449 4.449 0 01.5 2.938c.02-.292.094-.573.219-.844.146-.271.385-.5.719-.688l.312-.218.313.187c.229.146.447.27.656.375l.625.313c.25.124.5.26.75.406.25.125.52.27.812.437l.313.219-.032.344a.514.514 0 00.125.312l.344.094.032.438v.375c0 .187.01.322.03.406.022.062.063.135.126.218L6 5.72c0 .375.031.708.094 1 .062.291.135.583.218.875.105.291.188.593.25.906.063.292.073.615.032.969.125-.063.25-.156.375-.281l.125-.126.187-.124 2.188-2.97-.063-.374.781-.75c.209-.167.407-.334.594-.5.188-.188.344-.396.469-.625l.188-.281c.937-1.25 2.145-2.021 3.624-2.313L15.595 1l.156.5c.104.292.302.552.594.781.312.209.646.417 1 .625l.343.219c.125.25.188.438.188.563 0 .124-.01.229-.031.312l.156.406c-.23.604-.48 1.042-.75 1.313-.27.25-.552.49-.844.718-.229.188-.437.375-.625.563a2.122 2.122 0 00-.437.625l-.25.313c-.521.27-.854.666-1 1.187l-.125.438H13.5c-.02 0-.073.052-.156.156-.084.083-.209.302-.375.656-.188.25-.323.417-.406.5l-.157.156a3.676 3.676 0 01-.125.281c-.02.084-.052.188-.094.313l-.187.25a1.716 1.716 0 00-.406.5c-.084.146-.177.323-.281.531-.084.188-.178.386-.282.594-.104.188-.25.375-.437.563l.062.343-.25.219a2.027 2.027 0 00-.437.563c-.125.208-.25.427-.375.656-.125.25-.26.5-.406.75-.146.25-.334.479-.563.687a5.963 5.963 0 01-.406.875c-.104.209-.292.459-.563.75-.25 1-.843 2.073-1.781 3.219-.02.23-.094.458-.219.688a5.51 5.51 0 01-.343.593 4.24 4.24 0 01-.157.282l-.093.187-.094.344c-.125.229-.26.416-.407.562-.125.146-.25.282-.375.407a1.238 1.238 0 00-.187.156 1.03 1.03 0 01-.125.156l-.531.188zM66.558 6.875c.041.458.114.854.218 1.188.104.333.219.656.344.968.104.292.198.584.281.875.104.271.177.604.219 1a13.112 13.112 0 00-.375 1.5c-.063.459-.135.938-.219 1.438-.333.729-.656 1.375-.968 1.937a20.021 20.021 0 00-.75 1.469c-.105.104-.198.23-.282.375-.062.125-.135.26-.218.406a2.785 2.785 0 00-.157.282 1.051 1.051 0 01-.156.25l-.625-.22-.125.782-.438.125-.312.375a9.95 9.95 0 01-1.25 1.75 8.849 8.849 0 01-1.5 1.25c-.542.354-1.167.688-1.875 1-.688.313-1.469.656-2.344 1.031a8.146 8.146 0 00-.937-.062l-.719-.063c-.396 0-.885-.031-1.469-.093-.062-.167-.156-.282-.281-.344a.777.777 0 00-.344-.094 1.826 1.826 0 01-.812-.719 26.001 26.001 0 01-.5-1.062 8.655 8.655 0 00-.313-.625 9.238 9.238 0 00-.344-.625l.532-.157-.688-.75a.558.558 0 00-.156-.156 1.244 1.244 0 01-.156-.187l-.032-.5a91.28 91.28 0 01-.093-3.938c.02-1.208.187-2.281.5-3.219v-.343c.062-.459.125-.834.187-1.125.063-.313.115-.604.156-.875.063-.459.157-.886.282-1.281.291-.063.51-.178.656-.344.146-.188.27-.354.375-.5.292-.021.49.02.594.125.104.104.208.27.312.5.104.187.23.396.375.625.167.229.406.406.719.531.042.167.094.344.156.531.084.167.167.354.25.563a9 9 0 01.438 1.125c.146.375.229.74.25 1.094a5.907 5.907 0 00-.5 1.374c-.104.521-.177 1.053-.219 1.594-.02.521-.01 1.031.031 1.531.063.48.156.886.281 1.22l.188.405.531-.062a18.183 18.183 0 001.688-.531c.52-.209 1-.448 1.437-.719.438-.27.854-.583 1.25-.938.396-.375.813-.802 1.25-1.28.438-.48.813-1.022 1.125-1.626.334-.625.604-1.27.813-1.937.229-.667.396-1.323.5-1.969.125-.667.208-1.292.25-1.875.354-.125.531-.375.531-.75l-.063-.344c-.083-.125-.083-.27 0-.437.126-.396.417-.698.876-.907.333.209.624.438.874.688.271.25.521.5.75.75zM73.15 21.406c-.23.834-.438 1.469-.625 1.907-.167.416-.427.854-.781 1.312-.271-.042-.459-.01-.563.094a2.252 2.252 0 01-.343.281c-.188.042-.323.042-.407 0a.836.836 0 01-.218-.156 6.394 6.394 0 00-.25-.157c-.084-.041-.22-.062-.407-.062a3.098 3.098 0 00-.156-.469c-.042-.146-.177-.198-.406-.156a.96.96 0 00.031-.406 1.113 1.113 0 00-.094-.313A6.248 6.248 0 0068.87 23a.805.805 0 01.031-.375c-.104 0-.188-.073-.25-.219a4.287 4.287 0 00-.219-.437c.063-.375.125-.73.188-1.063.062-.333.135-.646.219-.937.104-.292.187-.584.25-.875a1.534 1.534 0 00-.094-.907c.083.063.146.053.187-.03a1.64 1.64 0 00.094-.376c.02-.166.031-.323.031-.468 0-.167-.01-.303-.031-.407.208-.541.375-1.093.5-1.656.146-.583.27-1.156.375-1.719.125-.562.25-1.114.375-1.656a7.921 7.921 0 01.5-1.5c.23-.042.48-.01.75.094.292.083.469.198.531.344a7.04 7.04 0 001.438-1.5c.416-.605.844-1.188 1.281-1.75a9.839 9.839 0 011.438-1.5c.541-.438 1.218-.698 2.03-.782.417.313.876.636 1.376.969.52.313.948.73 1.281 1.25.167.083.302.177.406.281.125.084.271.177.438.282v.374c.25.23.448.5.594.813.166.292.312.615.437.969.125.333.25.677.375 1.031.125.333.27.656.438.969a.767.767 0 00-.063.281c0 .063.01.135.031.219.042.083.073.166.094.25.02.083.02.198 0 .344-.063.916-.365 1.656-.906 2.218a6.569 6.569 0 01-1.906 1.406 16.44 16.44 0 01-2.407.907c-.854.25-1.625.52-2.312.812 0 .084.031.125.094.125.083 0 .114.052.093.157.5.312.896.562 1.188.75.291.187.562.343.812.468.271.125.552.24.844.344.313.083.74.188 1.281.313.542.125.959.229 1.25.312.313.063.594.125.844.188l.75.125c.27.02.646.052 1.125.093.188.188.344.417.469.688.146.25.24.51.281.781.042.25.052.5.031.75a.976.976 0 01-.218.563c.02.062.062.093.125.093a.509.509 0 01.25 0c-.125.084-.23.188-.313.313l-.25.375c-.083.125-.177.229-.281.312a.708.708 0 01-.438.188c-.646.25-1.458.26-2.437.031-.98-.208-2.219-.604-3.719-1.188a52.6 52.6 0 01-1.844-.75c-.458-.229-.864-.447-1.218-.656-.334-.229-.646-.468-.938-.718a89.43 89.43 0 00-1-.907zm4.469-10.718c-.23.333-.49.635-.781.906-.271.27-.542.552-.813.844-.25.27-.48.583-.688.937a3.35 3.35 0 00-.437 1.188 9.019 9.019 0 002.281-.594c.792-.334 1.542-.646 2.25-.938-.083-.646-.312-1.166-.687-1.562-.354-.396-.73-.656-1.125-.781zM100.516 16.499c.023-.09.067-.123.135-.101.09 0 .168-.011.236-.034a1.233 1.233 0 01-.337-.707 1.441 1.441 0 00-.337-.775c.045-.112.079-.225.101-.337.045-.112.146-.157.303-.135a4.038 4.038 0 01.034-1.381c.09-.427.224-.831.404-1.213.202-.382.427-.753.674-1.112.27-.382.528-.764.775-1.145.202-.045.326-.023.371.067.044.067.123.045.235-.067.36-.247.607-.517.742-.809.134-.314.202-.651.202-1.01.202-.585.426-1.157.674-1.719a11.12 11.12 0 01.909-1.617c.337-.494.696-.921 1.078-1.28a4.204 4.204 0 011.247-.876c.314-.27.707-.517 1.179-.742a7.361 7.361 0 011.55-.505 7.331 7.331 0 011.718-.202 5.342 5.342 0 011.617.168c.113.045.18.023.203-.067.022-.112.078-.169.168-.169 1.123.135 2.123.36 2.999.674.898.315 1.662.753 2.291 1.314a22.28 22.28 0 011.212 2.19c.382.764.674 1.572.876 2.426a9.03 9.03 0 01.304 2.594 7.76 7.76 0 01-.573 2.695 9.212 9.212 0 01-2.864 2.393 22 22 0 01-3.639 1.482c-1.28.382-2.616.696-4.009.943-1.37.247-2.706.517-4.009.809.022.606.022 1.258 0 1.954a13.141 13.141 0 01-.236 2.055 10.407 10.407 0 01-.539 1.988 7.026 7.026 0 01-.943 1.82 5.2 5.2 0 00-1.415.134c-.472.112-.899.225-1.281.337l-.539-.337a1.49 1.49 0 00-.606-.168c.067-.27 0-.55-.202-.843-.18-.292-.371-.572-.573-.842a3.03 3.03 0 01-.371-.842c-.045-.292.09-.55.405-.775-.18-.157-.27-.404-.27-.741.09.09.202.134.337.134-.045-.404 0-.887.135-1.448.157-.562.28-1.112.37-1.651.113-.562.135-1.067.068-1.516-.068-.472-.337-.809-.809-1.011zm8.76-7.884c-.09.247-.169.472-.236.674-.045.18-.101.348-.168.505a4.712 4.712 0 01-.236.472c-.068.157-.146.337-.236.54a.513.513 0 00.269.302.512.512 0 01.27.304c.314-.158.629-.27.943-.337.315-.09.629-.157.944-.202.314-.045.629-.101.943-.169.314-.067.64-.18.977-.337a5.77 5.77 0 011.045-.37 70.36 70.36 0 001.111-.337c.36-.113.708-.236 1.045-.37.337-.158.629-.36.876-.607-.315-.292-.786-.55-1.415-.775a7.42 7.42 0 00-2.055-.405 7.243 7.243 0 00-2.19.135 4.012 4.012 0 00-1.887.977zM139.868 7.032c.022.157.022.28 0 .37a.65.65 0 01-.034.202v.236c0 .068.022.18.067.337-.471.764-1.022 1.292-1.651 1.584a8.928 8.928 0 01-1.987.606c-.719.112-1.46.236-2.224.37-.741.136-1.482.428-2.224.877-.292-.113-.561-.113-.808 0-.225.112-.562.146-1.011.1a1.27 1.27 0 01-.505.304 6.104 6.104 0 00-.607.168c.09.203.124.416.101.64 0 .203.034.371.101.506a14.46 14.46 0 002.595-.034c.965-.09 1.909-.146 2.83-.168.022.112.011.19-.034.236-.045.022-.056.078-.034.168.158.112.315.258.472.438l.472.472c.157.157.314.292.471.404.18.09.382.124.607.101.09.18.146.382.168.607a1.07 1.07 0 01-.067.64c-.359.247-.719.505-1.078.775-.36.247-.741.471-1.146.674a6.89 6.89 0 01-1.246.505 4.9 4.9 0 01-1.449.135h-.27c-.044 0-.112-.034-.202-.101-.179.112-.438.146-.775.1-.314-.044-.561-.01-.741.102-.247-.113-.55-.157-.909-.135-.337 0-.641-.045-.91-.135a11.6 11.6 0 00-.977 1.516c-.292.54-.551 1.112-.775 1.719.764.112 1.392.157 1.887.134.516-.022.999-.056 1.448-.1.45-.068.91-.124 1.382-.17.471-.067 1.067-.089 1.785-.067.45-.247.977-.404 1.584-.471a9.2 9.2 0 001.718-.404c.18.067.337.19.472.37.135.157.258.314.37.472.135.135.27.258.405.37a.643.643 0 00.505.135.6.6 0 01.168.337c.045.112.079.225.102.337.022.112.056.213.101.303.067.068.168.09.303.068-.337.74-.73 1.314-1.179 1.718a4.47 4.47 0 01-1.483.876c-.561.202-1.19.36-1.886.471-.674.113-1.427.247-2.258.405-.202.045-.37.034-.505-.034a1.496 1.496 0 00-.472-.067c-.516.112-1.134.213-1.853.303-.719.09-1.449.123-2.19.101a9.298 9.298 0 01-2.122-.303c-.674-.158-1.224-.45-1.651-.876a1.233 1.233 0 01-.371-.54c-.045-.224-.191-.392-.438-.505a8.903 8.903 0 00-.135-.977c-.067-.36-.134-.73-.202-1.111a25.413 25.413 0 01-.168-1.18c-.023-.382 0-.73.067-1.044.068-.337.202-.64.404-.91.225-.27.304-.561.236-.876.113-.022.18-.078.202-.168.023-.113.113-.157.27-.135.135-.404.281-.786.438-1.145.157-.36.314-.708.472-1.045.179-.337.348-.674.505-1.01.18-.36.348-.753.505-1.18a3.06 3.06 0 01-.707-.943 6.68 6.68 0 01-.303-1.045c-.068-.36-.124-.718-.169-1.078a6.858 6.858 0 00-.236-1.145c.225-.337.494-.607.809-.809a4.838 4.838 0 011.078-.539 9.105 9.105 0 011.247-.337c.449-.09.921-.19 1.415-.303a27.25 27.25 0 012.392-.674c.719-.157 1.415-.28 2.089-.37a55.42 55.42 0 012.156-.304c.741-.09 1.583-.224 2.527-.404.202.202.393.303.573.303.089-.202.19-.258.303-.168.134.067.191 0 .168-.202.225.381.506.707.842.977.36.247.753.46 1.18.64z"
        fill="#fef9f9"
      />
      <path
        d="M158.229 9.794c-.561 0-1.167.045-1.819.135-.651.068-1.291.146-1.92.236-.449.067-.887.124-1.314.169-.405.044-.775.078-1.112.1-.157.495-.314.933-.472 1.315a16.44 16.44 0 01-.505 1.111c-.18.382-.348.775-.505 1.18-.135.381-.27.797-.405 1.246-.224.36-.415.696-.573 1.01a5.324 5.324 0 00-.336 1.012c-.27.337-.472.696-.607 1.078-.135.36-.236.674-.303.943l-.135.404c-.135.135-.213.247-.236.337a.444.444 0 01-.168.203 1.908 1.908 0 01-.236.74 1.875 1.875 0 00-.101.338.894.894 0 00-.034.202c0 .224-.056.37-.168.438.022.112.022.236 0 .37l-.068.337c-.067.27-.089.483-.067.64.067.09.124.169.168.236a.505.505 0 01.135.27c.135.09.236.146.303.168.09.068.225.146.405.236l.303.337c.112.651.011 1.168-.303 1.55-.337.426-.91.64-1.718.64h-.405c-.112-.112-.179-.202-.202-.27-.18-.067-.326-.123-.438-.168a.682.682 0 01-.303-.27 26.997 26.997 0 01-.708-.337l-.303-.168v-.404a2.468 2.468 0 01-.371-.674 8.987 8.987 0 01-.168-.741 4.332 4.332 0 00-.168-.573 1.497 1.497 0 00-.203-.472c-.044-1.303.079-2.403.371-3.302a57.24 57.24 0 01.91-2.594l.539-1.347c.179-.472.337-.955.471-1.45l.304-.336c.157-.36.28-.651.37-.876l.337-.741c.068-.157.124-.303.169-.438.067-.158.123-.292.168-.405a1.88 1.88 0 00-.37.034c-.113 0-.225.011-.337.034-.135.022-.259.045-.371.067h-.337c-.157 0-.269-.011-.337-.034a1.926 1.926 0 01-.808.169h-.54a.292.292 0 00-.134-.034c-.225 0-.405.034-.539.101h-1.112a.56.56 0 00-.169.034h-.168c-.157 0-.326-.011-.505-.034a2.371 2.371 0 01-.573-.236c-.27-.359-.449-.55-.539-.572l-.303-.404a1.815 1.815 0 00-.102-.371 12.44 12.44 0 01-.134-.438c-.09-.225-.18-.46-.27-.708a3.936 3.936 0 01-.101-.943c.023-.18.067-.314.135-.404.067-.09.123-.169.168-.236l.101-.505.438.033h.944c.718 0 1.448-.022 2.19-.067.741-.068 1.505-.135 2.291-.202l1.347-.135c.472-.045.955-.09 1.449-.135.09-.202.18-.393.27-.573l.337-.168c.404-.023.685.034.842.168.179.113.325.225.438.337l1.482-.134a36.905 36.905 0 001.55-.236 79.921 79.921 0 012.291-.304c.786-.09 1.539-.134 2.257-.134.315 0 .618.01.91.033.292.023.562.057.809.101l.337.236c.067.135.157.259.269.37l.404.338c.27.247.539.539.809.876.269.337.371.83.303 1.482-.18.27-.314.427-.404.472l-.303.404-.337-.033a.99.99 0 00-.371.067 1.947 1.947 0 00-.337.101l-.269.135c-.09.022-.191.045-.304.067h-.505a1.893 1.893 0 00-.371-.034z"
        fill="#fef9f9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.45 10.982c1.908.89 4.286-.155 5.3-2.329l.052-.111c.983-2.108 1.563-3.35-.313-4.225a7.714 7.714 0 00-1.478-.478l-.023-.023-.05.008c-2.017-.42-4.314-.108-5.11 1.601-1.014 2.175-.287 4.667 1.622 5.557zm-.412-4.471c.59-.258 1.407-.403 2.45-.195.898.18 1.628.165 2.19.063a3.283 3.283 0 01-.31 1.63c-.658 1.413-2.128 2.127-3.274 1.592-1.029-.48-1.454-1.803-1.056-3.09zM25.683 10.204c-.67.685-1.534 1.029-2.43.966-.29-.02-.937-.342-1.35-.548a12.816 12.816 0 00-.264-.13c-1.254-.585-1.508-1.623-1.397-3.25.143-2.043 1.723-3.603 3.523-3.478.843.057 1.293.67 1.819 1.385l.1.135c.052.072.106.143.16.214.496.66.993 1.322.933 2.194-.067.967-.455 1.859-1.094 2.512zm-2.022-4.92c-.963-.067-1.814.859-1.898 2.063-.082 1.203.634 2.237 1.596 2.303.443.03.882-.151 1.235-.512.386-.394.62-.945.663-1.55.041-.606-.116-1.184-.444-1.627a1.719 1.719 0 00-.65-.546 1.414 1.414 0 00-.502-.131zM32.03 12.48a6.305 6.305 0 013.598 4.895l.696 5.177a3.98 3.98 0 01-.464 2.474 3.98 3.98 0 01-1.848 1.709 3.98 3.98 0 01-2.502.27 3.987 3.987 0 01-2.17-1.275 7.877 7.877 0 00-5.676-2.672l-.056-.002a3.98 3.98 0 01-2.372-.843 3.98 3.98 0 01-1.401-2.09 3.98 3.98 0 01.122-2.513 3.981 3.981 0 011.596-1.945l4.413-2.795a6.304 6.304 0 016.063-.39zm2.68 9.501c-2.397-.952-5.937-1.656-6.226 1.026a9.422 9.422 0 00-4.841-1.474l-.038-.001a2.47 2.47 0 01-2.302-1.817 2.468 2.468 0 01.853-2.613c.566-.4 1.499-.572 3.333.215 2.8 1.2 2.833-.5 2-1.5 1 0 3.1-.3 3.5-1.5.076-.23.093-.426.066-.594a4.788 4.788 0 013.063 3.856l.592 4.402zM37.965 15.352a3.112 3.112 0 01-.824-.56c-1.405-1.328-1.32-3.708.19-5.306.715-.757 1.646-1.233 2.622-1.339.672-.073.822.171 1.046.535.116.189.252.41.49.634.2.19.465.375.74.567.683.478 1.427.997 1.39 1.729-.051.98-.474 1.936-1.19 2.693-1.243 1.316-3.072 1.697-4.464 1.047zm2.153-5.69c-.616.067-1.212.376-1.68.87-.932.988-1.146 2.886-.351 3.637.795.752 2.067.487 3-.5.467-.494.977-1.518 1.01-2.136.03-.573-.157-1.08-.525-1.427-.368-.348-.885-.506-1.454-.444zM43.283 17.97c-1.075-1.653-2.995-1.63-4.794-.653-1.798.977-2.329 2.517-1.468 4.103.313.579.8 1.013 1.38 1.283 1.01.47 2.302.445 3.446-.175 1.798-.977 2.297-2.972 1.436-4.558zm-2.163 3.218c-1.062.576-2.3.354-2.76-.495-.337-.621-.165-1.41.369-2.013 1.078-.183 2.442-.352 3.332-.293.055.067.105.14.147.22.46.847-.029 2.006-1.088 2.581z"
        fill="#FFC107"
      />
    </svg>
  );
}