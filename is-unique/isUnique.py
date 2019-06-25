def isUnique(string): #with a set
  if len(string) == 1:
    return True
  set = []
  for i in string:
    if i in set:
      return False
    set.append(i)
  return True

def isUnique2(string): #with no auxiliar data structure
  for i in range(0,len(string)):
    for j in range(i+1, len(string)):
      if(string[i]==string[j]):
        return False
  return True

print(isUnique("zerolsmnb"))
print(isUnique2("zerolsmnb"))
