function getPermissionList(permission: Permission): string[] {
  let arr = [];

  for (const p in Permission) {
    if ((permission & +Permission[p]) === +Permission[p]) {
      arr.push(p);
    }
  }

  return [...arr];
}

enum Permission {
  Read = 1,
  Write = 2,
  Execute = 4,
}

console.log(getPermissionList(Permission.Read | Permission.Write));
