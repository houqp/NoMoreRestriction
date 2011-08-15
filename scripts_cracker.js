function do_nothing()
{
  return;
}

function unset_reg()
{
  window.document.onkeydown = do_nothing;
}

unset_reg();
