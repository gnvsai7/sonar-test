package com.greencommute.userservice.mapper;



import com.greencommute.userservice.dto.UserDto;
import com.greencommute.userservice.entity.User;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto userToUserDTO(User user);


    User userDTOtoUser(UserDto dto);
}