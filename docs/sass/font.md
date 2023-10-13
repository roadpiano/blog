# 字体处理

## @mixin font-handle
```scss
@mixin font-handle($fontSize: 16, $lineHeight: 24) {
  $lineHeightRatio: calc($lineHeight / $fontSize);
  font-size: $fontSize + px;
  line-height: $lineHeightRatio;
  @media (max-width: 767px) {
    @if $fontSize > 48 {
      font-size: 21pt;
    } @else if $fontSize > 29 {
      font-size: 17pt;
    } @else if $fontSize > 20 {
      font-size: 14pt;
    } @else {
      font-size: 11pt;
    }
    line-height: $lineHeightRatio * 0.85;
  }
}
```