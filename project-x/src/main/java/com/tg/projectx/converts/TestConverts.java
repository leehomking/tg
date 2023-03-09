package com.tg.projectx.converts;

import com.tg.projectx.business.bo.TestBO;
import com.tg.projectx.controller.vo.TestVO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TestConverts {
    public static final TestConverts INSTANCE = Mappers.getMapper(TestConverts.class);

    @Mapping(source = "testVO.name", target = "nameA")
    public TestBO convert(TestVO testVO);
}

