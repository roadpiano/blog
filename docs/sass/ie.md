# IE兼容

## @mixin ie
`IE 9-11`
```scss
@mixin ie {
  @media screen and (min-width:0\0) and (min-resolution:72dpi) { @content; }
}
```