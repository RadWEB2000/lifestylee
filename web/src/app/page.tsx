import GET_POSTS from "@/queries/GET_POSTS";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const posts = await GET_POSTS();
  return (
    <div>
      <div
        style={{
          backgroundColor: "#eee964",
          display: "flex",
          padding: "2em 7em",
          fontWeight: 800,
          gap: "2em",
        }}
      >
        <Link href="/kategoria">KATEGORIA</Link>
        <Link href="/kategoria/podkategoria">PODKATEGORIA</Link>
        <Link href="/kategoria/podkategoria/jak-sie-zyje">WPIS</Link>
        {/* <Link href="">TAG</Link> */}
      </div>
      <div>
        {posts &&
          posts.map((item) => {
            return (
              <Link href={item.uri} key={item.title} title={item.title}>
                <Image
                  alt={item.image.altText}
                  height={531.25}
                  src={item.image.sourceUrl}
                  width={850}
                  style={{
                    objectFit: "cover",
                  }}
                  title={item.image.title}
                  quality={55}
                />
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.excerpt }} />
              </Link>
            );
          })}
      </div>
      <ul>
        <li>l1</li>
        <li>l2</li>
        <li>l29</li>
        <li>l30</li>
        <li>l31</li>
        <li>l32</li>
        <li>l33</li>
        <li>l34</li>
        <li>l35</li>
        <li>l36</li>
        <li>l37</li>
        <li>l38</li>
        <li>l39</li>
        <li>l40</li>
        <li>l41</li>
        <li>l42</li>
        <li>l43</li>
        <li>l44</li>
        <li>l45</li>
        <li>l46</li>
        <li>l47</li>
        <li>l48</li>
        <li>l49</li>
        <li>l50</li>
        <li>l51</li>
        <li>l52</li>
        <li>l53</li>
        <li>l54</li>
        <li>l55</li>
        <li>l56</li>
        <li>l57</li>
        <li>l58</li>
        <li>l59</li>
        <li>l60</li>
        <li>l61</li>
        <li>l62</li>
        <li>l63</li>
        <li>l64</li>
        <li>l65</li>
        <li>l66</li>
        <li>l67</li>
        <li>l68</li>
        <li>l69</li>
        <li>l70</li>
        <li>l71</li>
        <li>l72</li>
        <li>l73</li>
        <li>l74</li>
        <li>l75</li>
        <li>l76</li>
        <li>l77</li>
        <li>l78</li>
        <li>l79</li>
        <li>l80</li>
        <li>l81</li>
        <li>l82</li>
        <li>l83</li>
        <li>l84</li>
        <li>l85</li>
        <li>l86</li>
        <li>l87</li>
        <li>l88</li>
        <li>l89</li>
        <li>l90</li>
        <li>l91</li>
        <li>l92</li>
        <li>l93</li>
        <li>l94</li>
        <li>l95</li>
        <li>l96</li>
        <li>l97</li>
        <li>l98</li>
        <li>l99</li>
        <li>l100</li>
        <li>l101</li>
        <li>l102</li>
        <li>l103</li>
        <li>l104</li>
        <li>l105</li>
        <li>l106</li>
        <li>l107</li>
        <li>l108</li>
        <li>l109</li>
        <li>l110</li>
        <li>l111</li>
        <li>l112</li>
        <li>l113</li>
        <li>l114</li>
        <li>l115</li>
        <li>l116</li>
        <li>l117</li>
        <li>l118</li>
        <li>l119</li>
        <li>l120</li>
        <li>l121</li>
        <li>l122</li>
        <li>l123</li>
        <li>l124</li>
        <li>l125</li>
        <li>l126</li>
        <li>l127</li>
        <li>l128</li>
        <li>l129</li>
        <li>l130</li>
        <li>l131</li>
        <li>l132</li>
        <li>l133</li>
        <li>l134</li>
        <li>l135</li>
        <li>l136</li>
        <li>l137</li>
        <li>l138</li>
        <li>l139</li>
        <li>l140</li>
        <li>l141</li>
        <li>l142</li>
        <li>l143</li>
        <li>l144</li>
        <li>l145</li>
        <li>l146</li>
        <li>l147</li>
        <li>l148</li>
        <li>l149</li>
        <li>l150</li>
      </ul>
    </div>
  );
}
