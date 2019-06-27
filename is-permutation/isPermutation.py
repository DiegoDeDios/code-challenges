def getCharDicts(string):
  dictionary = {}
  for i in string:
    if i not in dictionary:
      dictionary[i] = 1
    else:
      dictionary[i]+=1
  return dictionary

def isPermutation(str1, str2):
  if(len(str1) != len(str2)):
    return False
  dict1 = getCharDicts(str1)
  dict2 = getCharDicts(str2)
  return dict1 == dict2
